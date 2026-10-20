/* Bali Besi Murah: catalogue, WhatsApp enquiries and delivery access check. */
const STORE_CONFIG = { whatsappNumber: "628218187917", currency: "IDR" };
const PRODUCTS = [
  {id:"besi",name:"Besi & Baja",category:"besi",tag:"Material struktur",image:"assets/images/besi.svg",description:"Pilihan besi dan material baja. Sebutkan jenis, diameter, panjang, dan jumlah yang dibutuhkan."},
  {id:"seng",name:"Seng & Atap",category:"atap",tag:"Atap bangunan",image:"assets/images/atap.svg",description:"Tanyakan pilihan profil, panjang, ketebalan, dan warna yang tersedia."},
  {id:"pasir",name:"Pasir",category:"pasir",tag:"Material dasar",image:"assets/images/pasir.svg",description:"Tanyakan jenis pasir, volume, satuan pemesanan, dan ongkos kirim ke lokasi."},
  {id:"semen-gresik",name:"Semen Gresik",category:"semen",tag:"Semen kemasan",image:"assets/images/semen.svg",description:"Konfirmasi ukuran kemasan, ketersediaan stok, dan harga terbaru sebelum memesan."},
  {id:"semen-dynamix",name:"Semen Dynamix",category:"semen",tag:"Semen kemasan",image:"assets/images/semen.svg",description:"Konfirmasi ukuran kemasan, ketersediaan stok, dan harga terbaru sebelum memesan."},
  {id:"bata-ringan",name:"Bata Ringan",category:"dinding",tag:"Material dinding",image:"assets/images/bata-ringan.svg",description:"Sampaikan ketebalan bata dan perkiraan volume proyek agar penawaran lebih sesuai."},
  {id:"bendrat",name:"Kawat Bendrat",category:"pelengkap",tag:"Material pengikat",image:"assets/images/bendrat.svg",description:"Tanyakan ukuran gulungan, berat, dan jumlah yang dibutuhkan."},
  {id:"kayu-pasang",name:"Kayu Pasang",category:"kayu",tag:"Material kayu",image:"assets/images/kayu.svg",description:"Sebutkan ukuran penampang, panjang, jenis kayu jika diketahui, dan jumlah."}
];
const productGrid=document.querySelector("#productGrid"), searchInput=document.querySelector("#productSearch");
const filterButtons=[...document.querySelectorAll("[data-filter]")]; let activeCategory="semua";
function safeText(value){return String(value).replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));}
function renderProducts(){
 const query=(searchInput?.value||"").trim().toLocaleLowerCase("id");
 const filtered=PRODUCTS.filter(p=>(activeCategory==="semua"||p.category===activeCategory)&&[p.name,p.tag,p.description].join(" ").toLocaleLowerCase("id").includes(query));
 if(!filtered.length){productGrid.innerHTML='<div class="empty-state">Produk tidak ditemukan. Coba kata kunci lain atau tanyakan material yang Anda cari.</div>';return;}
 productGrid.innerHTML=filtered.map(p=>`<article class="product-card"><div class="product-image"><img src="${p.image}" alt="${safeText(p.name)}" loading="lazy" width="600" height="400"></div><div class="product-body"><span class="product-tag">${safeText(p.tag)}</span><h3>${safeText(p.name)}</h3><p>${safeText(p.description)}</p><div class="product-actions"><a class="button button-dark button-small" href="#checkout" data-order-product="${safeText(p.name)}">Tanya & pesan <span aria-hidden="true">↗</span></a></div></div></article>`).join("");
}
function requestProduct(productName){
 const message=`Halo Bali Besi Murah, saya ingin menanyakan stok dan harga terbaru untuk ${productName}. Mohon informasi ukuran/varian yang tersedia dan biaya pengiriman ke lokasi saya. Terima kasih.`;
 window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`,"_blank","noopener,noreferrer");
}
document.addEventListener("click",event=>{
 const productLink=event.target.closest("[data-order-product]");
 if(productLink){const field=document.querySelector("#orderItems");if(field&&!field.value.trim())field.value=productLink.dataset.orderProduct+" — jumlah/ukuran akan dikonfirmasi";return;}
 const filter=event.target.closest("[data-filter]");
 if(filter){activeCategory=filter.dataset.filter;filterButtons.forEach(b=>b.setAttribute("aria-pressed",String(b===filter)));renderProducts();}
 const menu=event.target.closest("#menuToggle");
 if(menu){const nav=document.querySelector("#primaryNav"),opened=nav.classList.toggle("is-open");menu.setAttribute("aria-expanded",String(opened));}
 if(event.target.closest("#primaryNav a")){document.querySelector("#primaryNav")?.classList.remove("is-open");document.querySelector("#menuToggle")?.setAttribute("aria-expanded","false");}
});
searchInput?.addEventListener("input",renderProducts);
document.querySelectorAll("[data-category-link]").forEach(link=>link.addEventListener("click",()=>{activeCategory=link.dataset.categoryLink;filterButtons.forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.filter===activeCategory)));renderProducts();}));

let deliveryMap=null,deliveryMarker=null;
function setMapPoint(lat,lng,zoom=16){
 const latInput=document.querySelector("#deliveryLat"),lngInput=document.querySelector("#deliveryLng"),status=document.querySelector("#mapStatus"),preview=document.querySelector("#mapPreviewLink");
 if(!latInput||!lngInput)return;
 latInput.value=Number(lat).toFixed(6);lngInput.value=Number(lng).toFixed(6);
 if(deliveryMap){const point=[Number(lat),Number(lng)];deliveryMarker.setLatLng(point);deliveryMap.setView(point,zoom);}
 preview.href=`https://www.google.com/maps?q=${latInput.value},${lngInput.value}`;
 status.textContent=`Titik lokasi dipilih: ${latInput.value}, ${lngInput.value}. Geser pin atau ketuk peta untuk memperbaiki posisi.`;
}
function initDeliveryMap(){
 const el=document.querySelector("#deliveryMap");if(!el||!window.L)return;
 deliveryMap=L.map(el,{scrollWheelZoom:false}).setView([-8.65,115.216],10);
 L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'}).addTo(deliveryMap);
 deliveryMarker=L.marker([-8.65,115.216],{draggable:true}).addTo(deliveryMap);
 deliveryMarker.on("dragend",()=>{const p=deliveryMarker.getLatLng();setMapPoint(p.lat,p.lng);});
 deliveryMap.on("click",e=>setMapPoint(e.latlng.lat,e.latlng.lng));
 document.querySelector("#mapStatus").textContent="Peta Bali siap. Ketuk lokasi pengiriman yang tepat; pin bisa digeser.";
 setMapPoint(-8.65,115.216,10);
 setTimeout(()=>deliveryMap.invalidateSize(),250);
}
document.querySelector("#findAddress")?.addEventListener("click",async()=>{
 const address=document.querySelector("#deliveryAddress").value.trim(),status=document.querySelector("#mapStatus");
 if(!address){status.textContent="Isi alamat atau patokan terlebih dahulu.";return;}
 status.textContent="Sedang mencari alamat di peta…";
 try{
  const url="https://nominatim.openstreetmap.org/search?format=json&limit=1&q="+encodeURIComponent(address+", Bali, Indonesia");
  const response=await fetch(url,{headers:{Accept:"application/json"}});if(!response.ok)throw new Error("search failed");
  const results=await response.json();if(!results.length){status.textContent="Alamat belum ditemukan. Ketuk peta atau geser pin ke titik yang benar.";return;}
  setMapPoint(Number(results[0].lat),Number(results[0].lon),16);deliveryMap?.invalidateSize();
 }catch(e){status.textContent="Pencarian alamat tidak tersedia saat ini. Pilih titik dengan mengetuk peta atau geser pin.";}
});
document.querySelector("#locateMe")?.addEventListener("click",()=>{
 const status=document.querySelector("#mapStatus");
 if(!navigator.geolocation){status.textContent="Browser tidak mendukung lokasi otomatis. Pilih titik langsung di peta.";return;}
 status.textContent="Meminta izin lokasi dari browser…";
 navigator.geolocation.getCurrentPosition(pos=>setMapPoint(pos.coords.latitude,pos.coords.longitude,17),()=>{status.textContent="Lokasi tidak dapat diakses. Periksa izin lokasi, atau pilih titik langsung di peta."},{enableHighAccuracy:true,timeout:10000});
});
document.querySelector("#orderForm")?.addEventListener("submit",event=>{
 event.preventDefault();
 const name=document.querySelector("#customerName").value.trim(),phone=document.querySelector("#customerPhone").value.trim(),items=document.querySelector("#orderItems").value.trim(),engkel=document.querySelector("#accessEngkel").value,longTruck=document.querySelector("#accessLong").value,address=document.querySelector("#deliveryAddress").value.trim(),lat=document.querySelector("#deliveryLat").value,lng=document.querySelector("#deliveryLng").value,notes=document.querySelector("#orderNotes").value.trim(),status=document.querySelector("#orderStatus");
 if(!lat||!lng){status.textContent="Pilih titik lokasi pengiriman pada peta terlebih dahulu.";document.querySelector("#deliveryMap").scrollIntoView({behavior:"smooth",block:"center"});return;}
 const message=["Halo Bali Besi Murah, saya ingin meminta penawaran/pemesanan material.","",`Nama penerima: ${name}`,`Nomor telepon: ${phone}`,`Material dan jumlah: ${items}`,"",`Akses mobil engkel/truk 3/4: ${engkel}`,`Akses truk long: ${longTruck}`,`Alamat/patokan: ${address}`,`Titik peta: https://www.google.com/maps?q=${lat},${lng}`,notes?`Catatan: ${notes}`:"","Mohon konfirmasi stok, harga, jenis kendaraan yang sesuai, dan biaya pengiriman sebelum transaksi."].filter(Boolean).join("\n");
 status.textContent="Detail sudah disiapkan. WhatsApp akan terbuka untuk Anda mengirim pesan dan mengonfirmasi pesanan.";
 window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`,"_blank","noopener,noreferrer");
});
renderProducts();
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",initDeliveryMap);else initDeliveryMap();
