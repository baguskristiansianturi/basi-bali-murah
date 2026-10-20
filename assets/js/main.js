/* Bali Besi Murah: content-first catalogue interactions.
   Contact details and live prices are intentionally not fabricated. */
const STORE_CONFIG = {
  whatsappNumber: "628218187917", // Verified WhatsApp contact for enquiries and order details.
  currency: "IDR"
};

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

const productGrid = document.querySelector("#productGrid");
const searchInput = document.querySelector("#productSearch");
const filterButtons = [...document.querySelectorAll("[data-filter]")];
let activeCategory = "semua";

function safeText(value) {
  return String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}

function renderProducts() {
  const query = (searchInput?.value || "").trim().toLocaleLowerCase("id");
  const filtered = PRODUCTS.filter(product => {
    const matchesCategory = activeCategory === "semua" || product.category === activeCategory;
    const matchesQuery = [product.name, product.tag, product.description].join(" ").toLocaleLowerCase("id").includes(query);
    return matchesCategory && matchesQuery;
  });

  if (!filtered.length) {
    productGrid.innerHTML = '<div class="empty-state">Produk tidak ditemukan. Coba kata kunci lain atau tanyakan material yang Anda cari.</div>';
    return;
  }

  productGrid.innerHTML = filtered.map(product => `
    <article class="product-card">
      <div class="product-image"><img src="${product.image}" alt="${safeText(product.name)}" loading="lazy" width="600" height="400"></div>
      <div class="product-body">
        <span class="product-tag">${safeText(product.tag)}</span>
        <h3>${safeText(product.name)}</h3>
        <p>${safeText(product.description)}</p>
        <div class="product-actions">
          <button class="button button-dark button-small" type="button" data-enquire="${safeText(product.id)}">Tanya stok & harga <span aria-hidden="true">↗</span></button>
        </div>
      </div>
    </article>`).join("");
}

function requestProduct(productId) {
  const product = PRODUCTS.find(item => item.id === productId);
  if (!product) return;
  const message = `Halo Bali Besi Murah, saya ingin menanyakan stok dan harga terbaru untuk ${product.name}. Mohon informasi ukuran/varian yang tersedia dan biaya pengiriman ke lokasi saya. Terima kasih.`;
  if (!STORE_CONFIG.whatsappNumber) {
    const contactNote = document.querySelector("#contactNote");
    if (contactNote) {
      contactNote.textContent = "Nomor WhatsApp sudah disiapkan, tetapi pesan belum dapat dibuka. Silakan coba lagi atau hubungi toko melalui WhatsApp.";
      contactNote.scrollIntoView({behavior:"smooth",block:"center"});
    }
    return;
  }
  const number = STORE_CONFIG.whatsappNumber.replace(/\D/g, "");
  if (!number) return;
  window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}

document.addEventListener("click", event => {
  const enquireButton = event.target.closest("[data-enquire]");
  if (enquireButton) requestProduct(enquireButton.dataset.enquire);
  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) {
    activeCategory = filterButton.dataset.filter;
    filterButtons.forEach(button => button.setAttribute("aria-pressed", String(button === filterButton)));
    renderProducts();
  }
  const menuButton = event.target.closest("#menuToggle");
  if (menuButton) {
    const nav = document.querySelector("#primaryNav");
    const isOpen = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  }
  if (event.target.closest("#primaryNav a")) {
    document.querySelector("#primaryNav")?.classList.remove("is-open");
    document.querySelector("#menuToggle")?.setAttribute("aria-expanded", "false");
  }
});

searchInput?.addEventListener("input", renderProducts);
document.querySelectorAll("[data-category-link]").forEach(link => {
  link.addEventListener("click", () => {
    activeCategory = link.dataset.categoryLink;
    filterButtons.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.filter === activeCategory)));
    renderProducts();
  });
});
renderProducts();