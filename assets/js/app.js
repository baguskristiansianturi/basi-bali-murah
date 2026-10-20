// MASTER PRODUCTS DATA
        const PRODUCTS_DATA = [
            {
                id: 'p1',
                category: 'beton',
                title: 'Besi Beton Polos 8mm TP280 SNI',
                spec: 'Polos 8mm x 12m Full',
                price: 52000,
                weightKg: 4.74,
                badge: 'SNI Presisi',
                badgeStyle: 'bg-emerald-100 text-emerald-800 border-emerald-300',
                image: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=400&q=80'
            },
            {
                id: 'p2',
                category: 'beton',
                title: 'Besi Beton Polos 10mm TP280 SNI',
                spec: 'Polos 10mm x 12m Full',
                price: 78500,
                weightKg: 7.40,
                badge: 'Terlaris Proyek',
                badgeStyle: 'bg-amber-100 text-amber-800 border-amber-300',
                image: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=400&q=80'
            },
            {
                id: 'p3',
                category: 'beton',
                title: 'Besi Beton Ulir 13mm TS420B SNI',
                spec: 'Ulir Sirip 13mm x 12m Full',
                price: 132000,
                weightKg: 12.50,
                badge: 'High Tensile',
                badgeStyle: 'bg-blue-100 text-blue-800 border-blue-300',
                image: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=400&q=80'
            },
            {
                id: 'p4',
                category: 'beton',
                title: 'Besi Beton Ulir 16mm TS420B SNI',
                spec: 'Ulir Sirip 16mm x 12m Full',
                price: 198000,
                weightKg: 18.96,
                badge: 'SNI Presisi',
                badgeStyle: 'bg-emerald-100 text-emerald-800 border-emerald-300',
                image: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=400&q=80'
            },
            {
                id: 'p5',
                category: 'hollow',
                title: 'Besi Hollow Galvanis 20x40 T1.2mm',
                spec: '20mm x 40mm x 6 Meter',
                price: 68000,
                weightKg: 6.20,
                badge: 'Anti Karat',
                badgeStyle: 'bg-emerald-100 text-emerald-800 border-emerald-300',
                image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80'
            },
            {
                id: 'p6',
                category: 'hollow',
                title: 'Besi Hollow Galvanis 40x40 T1.6mm',
                spec: '40mm x 40mm x 6 Meter',
                price: 115000,
                weightKg: 11.20,
                badge: 'Anti Karat',
                badgeStyle: 'bg-emerald-100 text-emerald-800 border-emerald-300',
                image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80'
            },
            {
                id: 'p7',
                category: 'hollow',
                title: 'Besi Hollow Hitam 50x100 T2.0mm',
                spec: '50mm x 100mm x 6 Meter',
                price: 245000,
                weightKg: 22.50,
                badge: 'Tebal Murni',
                badgeStyle: 'bg-slate-100 text-slate-800 border-slate-300',
                image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80'
            },
            {
                id: 'p8',
                category: 'profile',
                title: 'Besi Wide Flange (WF) 150x75 SNI',
                spec: 'WF 150mm x 75mm x 12 Meter',
                price: 2150000,
                weightKg: 168.0,
                badge: 'Baja Berat',
                badgeStyle: 'bg-purple-100 text-purple-800 border-purple-300',
                image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80'
            },
            {
                id: 'p9',
                category: 'profile',
                title: 'Besi WF 200x100 SNI Gunung Garuda',
                spec: 'WF 200mm x 100mm x 12 Meter',
                price: 3420000,
                weightKg: 256.0,
                badge: 'GG Sertifikat',
                badgeStyle: 'bg-purple-100 text-purple-800 border-purple-300',
                image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80'
            },
            {
                id: 'p10',
                category: 'atap',
                title: 'Kanal C Baja Ringan C75 T0.75mm',
                spec: 'C75 x 75mm x 6m Galvalum AZ100',
                price: 82000,
                weightKg: 5.10,
                badge: 'Galvalum AZ100',
                badgeStyle: 'bg-amber-100 text-amber-800 border-amber-300',
                image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80'
            },
            {
                id: 'p11',
                category: 'atap',
                title: 'Atap Spandek Galvalum Polos 0.30mm',
                spec: 'Lebar Efektif 1m x Custom Meter',
                price: 54000,
                weightKg: 2.80,
                badge: 'Per Meter',
                badgeStyle: 'bg-blue-100 text-blue-800 border-blue-300',
                image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80'
            },
            {
                id: 'p12',
                category: 'wiremesh',
                title: 'Wiremesh Lembaran M8 SNI',
                spec: 'Diameter 8mm (2.1m x 5.4m)',
                price: 685000,
                weightKg: 62.50,
                badge: 'Cor Beton',
                badgeStyle: 'bg-emerald-100 text-emerald-800 border-emerald-300',
                image: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=400&q=80'
            }
        ];

        // BALI REGIONS & DISTRICTS DATA
        const BALI_REGIONS = {
            'Denpasar': ['Denpasar Barat', 'Denpasar Timur', 'Denpasar Utara', 'Denpasar Selatan'],
            'Badung': ['Kuta Utara (Canggu/Kerobokan)', 'Kuta', 'Kuta Selatan (Nusa Dua/Jimbaran)', 'Mengwi', 'Abiansemal', 'Petang'],
            'Gianyar': ['Ubud', 'Sukawati', 'Gianyar Kota', 'Blahbatuh', 'Payangan', 'Tegallalang', 'Tampaksiring'],
            'Tabanan': ['Kediri', 'Tabanan Kota', 'Marga', 'Penebel', 'Kerambitan', 'Selemadeg', 'Baturiti'],
            'Buleleng': ['Singaraja Kota', 'Seririt', 'Sukasada', 'Banjar (Lovina)', 'Sawan', 'Gerokgak'],
            'Karangasem': ['Amlapura / Karangasem Kota', 'Manggis', 'Rendang', 'Padangbai', 'Kubu', 'Abang'],
            'Klungkung': ['Semarapura / Klungkung Kota', 'Dawan', 'Banjarangkan', 'Nusa Penida'],
            'Bangli': ['Bangli Kota', 'Kintamani', 'Susut', 'Tembuku'],
            'Jembrana': ['Negara', 'Gilimanuk', 'Mendoyo', 'Pekutatan', 'Jembrana Kota']
        };

        // Shopping cart state
        let shoppingCart = [];
        let cartToastTimer = null;
        function showCartToast(message) {
          const toast = document.getElementById("cartToast");
          if (!toast) return;
          toast.textContent = message;
          toast.classList.add("is-visible");
          if (cartToastTimer) clearTimeout(cartToastTimer);
          cartToastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
        }
        function toggleMobileSearch(){
          const panel=document.getElementById('mobileSearchPanel');
          const button=document.getElementById('mobileSearchToggle');
          const opening=panel.classList.contains('hidden');
          panel.classList.toggle('hidden');
          button.setAttribute('aria-expanded',String(opening));
          if(opening){document.getElementById('mobileSearchInput').focus();}
          else {document.getElementById('mobileSearchInput').value='';filterProductsMobile();}
        }
        // RENDER PRODUCT CATALOG
        function renderProducts(productsToRender) {
            const grid = document.getElementById('productGrid');
            grid.innerHTML = '';

            if(productsToRender.length === 0) {
                grid.innerHTML = `<div class="col-span-full text-center py-12 text-slate-500 text-xs">Produk material tidak ditemukan. Coba kata kunci lain.</div>`;
                return;
            }

            productsToRender.forEach(p => {
                const card = document.createElement('article');
                card.className = 'product-card-market bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-amberAccent transition-all duration-300 shadow-sm hover:shadow-md';
                card.innerHTML = `
                    <button class="product-open" type="button" onclick="openProductDetail('${p.id}')" aria-label="Lihat detail ${p.title}">
                      <span class="relative block w-full"><img src="${p.image}" alt="${p.title}" loading="lazy" class="market-product-image"></span>
                      <span class="market-product-copy block text-left">
                        <span class="${p.badgeStyle} border text-[10px] font-bold px-2 py-0.5 rounded inline-flex mb-2 uppercase tracking-wider">${p.badge}</span>
                        <span class="product-card-title block text-sm sm:text-base font-bold text-navyPrimary leading-snug">${p.title}</span>
                        <span class="product-card-spec block text-xs text-slate-500 mt-1">${p.spec}</span>
                        <span class="product-card-weight block text-[11px] text-slate-500 mt-2"><i class="fa-solid fa-weight-hanging mr-1"></i> ${p.weightKg} kg / unit</span>
                        <strong class="product-card-price block text-lg font-black text-amberAccent mt-2">Rp ${p.price.toLocaleString('id-ID')}</strong>
                        <span class="product-card-detail inline-flex items-center gap-1 text-xs font-bold text-navyPrimary mt-3">Spesifikasi <i class="fa-solid fa-chevron-right"></i></span>
                      </span>
                    </button>
                    <div class="market-card-actions"><button type="button" onclick="addToCart('${p.id}')" class="cart-add-button bg-white hover:bg-slate-100 text-navyPrimary border border-slate-300 font-bold py-2.5 rounded-lg text-xs"><i class="fa-solid fa-cart-plus text-amberAccent mr-1"></i> + Keranjang</button><button type="button" onclick="buyNowDirect('${p.id}')" class="buy-button bg-navyPrimary hover:bg-slateNavy text-white font-bold py-2.5 rounded-lg text-xs">Tanya</button></div>`;
                grid.appendChild(card);
            });
        }

        // Marketplace-style detail and FAQ panels
        function openProductDetail(productId) {
          const p=PRODUCTS_DATA.find(item=>item.id===productId); if(!p)return;
          document.getElementById('detailTitle').textContent=p.title;
          document.getElementById('productDetailContent').innerHTML=`<img src="${p.image}" alt="${p.title}" class="w-full h-56 sm:h-72 object-cover rounded-xl bg-slate-100"><div class="mt-4 flex items-start justify-between gap-3"><h4 class="text-lg font-extrabold text-navyPrimary">${p.title}</h4><span class="${p.badgeStyle} border rounded-md px-2 py-1 text-[10px] font-bold">${p.badge}</span></div><p class="text-xl font-black text-amberAccent mt-3">Rp ${p.price.toLocaleString('id-ID')} <span class="text-xs text-slate-500 font-normal">/ unit (estimasi)</span></p><div class="border border-slate-200 rounded-xl mt-4 overflow-hidden"><div class="bg-slate-50 px-4 py-3 font-bold text-sm">Spesifikasi produk</div><dl class="p-4 grid grid-cols-[120px_1fr] gap-y-3 text-sm"><dt class="text-slate-500">Kategori</dt><dd class="font-semibold">${({beton:'Besi beton',hollow:'Hollow & pipa',profile:'Baja berat',atap:'Atap & baja ringan',wiremesh:'Wiremesh & plat'})[p.category]||p.category}</dd><dt class="text-slate-500">Tipe / ukuran</dt><dd class="font-semibold">${p.spec}</dd><dt class="text-slate-500">Estimasi berat</dt><dd class="font-semibold">${p.weightKg} kg per unit</dd><dt class="text-slate-500">Stok</dt><dd class="font-semibold text-amber-700">Konfirmasi ke admin</dd><dt class="text-slate-500">Harga</dt><dd class="font-semibold">Perlu konfirmasi sebelum transaksi</dd></dl></div><div class="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs leading-relaxed text-amber-900"><strong>Mohon periksa kembali:</strong> spesifikasi dan estimasi harga di halaman ini bukan konfirmasi stok. Tanyakan ukuran, merek, jumlah, harga terbaru, dan ongkos kirim sebelum membayar.</div>`;
          document.getElementById('detailAddButton').onclick=()=>{addToCart(p.id);closeProductDetail();};
          document.getElementById('detailAskButton').href='https://wa.me/628218187917?text='+encodeURIComponent('Halo Bali Besi Murah. Saya ingin cek stok dan harga terbaru untuk: '+p.title+' ('+p.spec+'). Mohon info ketersediaan dan ongkos kirim.');
          document.getElementById('productDetailOverlay').classList.remove('hidden');document.getElementById('productDetailPanel').classList.remove('translate-x-full');document.body.classList.add('panel-open');
        }
        function closeProductDetail(){document.getElementById('productDetailOverlay').classList.add('hidden');document.getElementById('productDetailPanel').classList.add('translate-x-full');document.body.classList.remove('panel-open');}
        function openFaqPanel(){document.getElementById('faqOverlay').classList.remove('hidden');document.getElementById('faqPanel').classList.remove('translate-x-full');document.body.classList.add('panel-open');}
        function closeFaqPanel(){document.getElementById('faqOverlay').classList.add('hidden');document.getElementById('faqPanel').classList.add('translate-x-full');document.body.classList.remove('panel-open');}
        function askLiveChat(question){
          const answers = {
            'Harga produk':'Harga mengikuti jenis material, ukuran, merek, dan jumlah pembelian. Angka di katalog hanya informasi awal; minta penawaran terbaru dari admin sebelum transaksi.',
            'Ketersediaan stok':'Stok dapat berubah. Sebutkan nama produk, ukuran, merek atau spesifikasi, serta jumlah yang dibutuhkan agar admin dapat memeriksanya.',
            'Gratis ongkir':'Ketentuan gratis ongkir bergantung pada produk, jumlah pesanan, dan lokasi. Admin perlu mengonfirmasi apakah pesanan Anda memenuhi syarat.',
            'Pengiriman seluruh Bali':'Anda dapat menanyakan pengiriman ke wilayah Bali. Admin akan memeriksa alamat, jadwal, akses kendaraan, dan biaya yang berlaku.',
            'Cara memesan':'Pilih produk dan jumlahnya, lalu tekan “Beli / Tanyakan” atau hubungi admin WhatsApp. Pastikan harga, stok, ongkir, dan metode pembayaran dikonfirmasi sebelum membayar.',
            'Kendaraan dan akses lokasi':'Sampaikan alamat atau titik peta serta kondisi jalan—misalnya gang sempit, portal, atau lokasi bongkar. Admin akan memeriksa jenis kendaraan yang memungkinkan.'
          };
          const messages=document.getElementById('liveChatMessages');
          if(!messages)return;
          const user=document.createElement('div');user.className='flex justify-end';
          const ub=document.createElement('div');ub.className='chat-user-bubble';ub.textContent=question;user.appendChild(ub);messages.appendChild(user);
          const bot=document.createElement('div');bot.className='flex justify-start';
          const bb=document.createElement('div');bb.className='chat-bot-bubble';bb.textContent=answers[question]||'Untuk informasi ini, silakan hubungi admin agar mendapat jawaban yang sesuai dengan kebutuhan Anda.';bot.appendChild(bb);messages.appendChild(bot);
          messages.scrollTop=messages.scrollHeight;
        }

        // FILTER CATEGORY TABS
        function filterCategory(cat) {
            const buttons = document.querySelectorAll('.cat-btn');
            buttons.forEach(b => {
                b.classList.remove('active', 'bg-navyPrimary', 'text-white');
                b.classList.add('bg-white', 'text-slate-700');
            });
            event.target.classList.add('active', 'bg-navyPrimary', 'text-white');

            if(cat === 'all') {
                renderProducts(PRODUCTS_DATA);
            } else {
                const filtered = PRODUCTS_DATA.filter(p => p.category === cat);
                renderProducts(filtered);
            }
        }

        // SEARCH FILTERS
        function filterProducts() {
            const q = document.getElementById('searchInput').value.toLowerCase();
            const filtered = PRODUCTS_DATA.filter(p => 
                p.title.toLowerCase().includes(q) || 
                p.spec.toLowerCase().includes(q)
            );
            renderProducts(filtered);
        }

        function filterProductsMobile() {
            const q = document.getElementById('mobileSearchInput').value.toLowerCase();
            const filtered = PRODUCTS_DATA.filter(p => 
                p.title.toLowerCase().includes(q) || 
                p.spec.toLowerCase().includes(q)
            );
            renderProducts(filtered);
        }

        // SHOPPING CART ENGINE
        function toggleCartDrawer() {
            const overlay = document.getElementById('cartDrawerOverlay');
            const drawer = document.getElementById('cartDrawer');
            overlay.classList.toggle('hidden');
            drawer.classList.toggle('translate-x-full');
        }

        function addToCart(productId) {
            const product = PRODUCTS_DATA.find(p => p.id === productId);
            if(!product) return;

            const existingItem = shoppingCart.find(item => item.id === productId);
            if(existingItem) {
                existingItem.qty += 1;
            } else {
                shoppingCart.push({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    weightKg: product.weightKg,
                    qty: 1
                });
            }

            updateCartUI();
            showCartToast(`${product.title} ditambahkan ke keranjang`);
        }

        function buyNowDirect(productId) {
            addToCart(productId);
            openCheckoutModal();
        }

        function updateCartQty(productId, delta) {
            const item = shoppingCart.find(i => i.id === productId);
            if(!item) return;

            item.qty += delta;
            if(item.qty <= 0) {
                shoppingCart = shoppingCart.filter(i => i.id !== productId);
            }
            updateCartUI();
        }

        function updateCartUI() {
            const container = document.getElementById('cartItemsContainer');
            const emptyState = document.getElementById('cartEmptyState');
            const badge = document.getElementById('cartBadge');
            const itemCountHeader = document.getElementById('cartItemCount');
            const totalWeightEl = document.getElementById('cartTotalWeight');
            const totalPriceEl = document.getElementById('cartTotalPrice');
            const btnProceed = document.getElementById('btnProceedCheckout');

            const totalItems = shoppingCart.reduce((sum, i) => sum + i.qty, 0);
            badge.innerText = totalItems;
            itemCountHeader.innerText = totalItems;
            const mobileBadge=document.getElementById('mobileCartBadge'); if(mobileBadge) mobileBadge.innerText=totalItems;
            const mobileHeaderBadge=document.getElementById('mobileHeaderCartBadge'); if(mobileHeaderBadge) mobileHeaderBadge.innerText=totalItems;

            if(shoppingCart.length === 0) {
                container.innerHTML = '';
                container.appendChild(emptyState);
                totalWeightEl.innerText = '0.0 Kg';
                totalPriceEl.innerText = 'Rp 0';
                btnProceed.disabled = true;
                btnProceed.className = "w-full bg-slate-200 text-slate-400 cursor-not-allowed font-bold py-3.5 rounded-xl shadow flex items-center justify-center gap-2 text-xs uppercase tracking-wider transition-all";
                return;
            }

            container.innerHTML = '';
            let calcTotalWeight = 0;
            let calcTotalPrice = 0;

            shoppingCart.forEach(item => {
                const itemSubtotal = item.price * item.qty;
                const itemSubWeight = item.weightKg * item.qty;
                calcTotalPrice += itemSubtotal;
                calcTotalWeight += itemSubWeight;

                const itemRow = document.createElement('div');
                itemRow.className = 'bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex justify-between items-center gap-3';
                itemRow.innerHTML = `
                    <div class="flex-1">
                        <h4 class="text-xs font-bold text-navyPrimary line-clamp-1">${item.title}</h4>
                        <div class="text-[11px] font-mono text-slate-500 mt-0.5">
                            Rp ${item.price.toLocaleString('id-ID')} | ${(itemSubWeight).toFixed(1)} Kg
                        </div>
                        <div class="text-xs font-bold text-amberAccent mt-1">
                            Subtotal: Rp ${itemSubtotal.toLocaleString('id-ID')}
                        </div>
                    </div>
                    <div class="flex items-center gap-1.5 bg-white border border-slate-300 rounded-lg p-1">
                        <button onclick="updateCartQty('${item.id}', -1)" class="w-6 h-6 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded font-bold text-xs">-</button>
                        <span class="text-xs font-bold text-navyPrimary w-5 text-center">${item.qty}</span>
                        <button onclick="updateCartQty('${item.id}', 1)" class="w-6 h-6 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded font-bold text-xs">+</button>
                    </div>
                `;
                container.appendChild(itemRow);
            });

            totalWeightEl.innerText = `${calcTotalWeight.toFixed(1)} Kg (${(calcTotalWeight/1000).toFixed(2)} Ton)`;
            totalPriceEl.innerText = `Rp ${calcTotalPrice.toLocaleString('id-ID')}`;

            btnProceed.disabled = false;
            btnProceed.className = "w-full bg-amberAccent hover:bg-amberHover text-white font-bold py-3.5 rounded-xl shadow flex items-center justify-center gap-2 text-xs uppercase tracking-wider transition-all cursor-pointer";
        }

        // CHECKOUT & BALI REGIONAL DROPDOWNS
        function openCheckoutModal() {
            if(shoppingCart.length === 0) return;
            toggleCartDrawer();

            const totalQty = shoppingCart.reduce((sum, i) => sum + i.qty, 0);
            const totalWeight = shoppingCart.reduce((sum, i) => sum + (i.weightKg * i.qty), 0);
            const totalPrice = shoppingCart.reduce((sum, i) => sum + (i.price * i.qty), 0);
            document.getElementById('checkoutSummaryQty').innerText = `${totalQty} item barang`;
            document.getElementById('checkoutSummaryWeight').innerText = `${totalWeight.toFixed(1)} Kg (${(totalWeight/1000).toFixed(2)} Ton)`;
            document.getElementById('checkoutSummaryPrice').innerText = `Rp ${totalPrice.toLocaleString('id-ID')}`;

            document.getElementById('checkoutModal').classList.remove('hidden');

            setTimeout(() => {
                initLeafletMap();
            }, 300);
        }

        function closeCheckoutModal() {
            document.getElementById('checkoutModal').classList.add('hidden');
        }

        function updateKecamatanDropdown() {
            const kab = document.getElementById('regKabupaten').value;
            const kecSelect = document.getElementById('regKecamatan');
            kecSelect.innerHTML = '';

            if(!kab || !BALI_REGIONS[kab]) {
                kecSelect.innerHTML = '<option value="">-- Pilih Kabupaten Dahulu --</option>';
                return;
            }

            kecSelect.innerHTML = '<option value="">-- Pilih Kecamatan --</option>';
            BALI_REGIONS[kab].forEach(kec => {
                const opt = document.createElement('option');
                opt.value = kec;
                opt.innerText = kec;
                kecSelect.appendChild(opt);
            });
        }

        // MAP PINPOINT INTERACTIVE (LEAFLET.JS)
        let mapInstance = null;
        let mapMarker = null;

        function initLeafletMap() {
            if(mapInstance) {
                mapInstance.invalidateSize();
                return;
            }

            const defaultLat = -8.670458; // Denpasar Central
            const defaultLng = 115.212629;

            mapInstance = L.map('leafletMap').setView([defaultLat, defaultLng], 12);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; OpenStreetMap'
            }).addTo(mapInstance);

            const customIcon = L.divIcon({
                className: 'custom-pin',
                html: `<div style="background-color: #D97706; width: 22px; height: 22px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px rgba(0,0,0,0.3);"></div>`,
                iconSize: [22, 22],
                iconAnchor: [11, 11]
            });

            mapMarker = L.marker([defaultLat, defaultLng], { draggable: true, icon: customIcon }).addTo(mapInstance);

            mapInstance.on('click', function(e) {
                updateMapMarkerPosition(e.latlng.lat, e.latlng.lng);
            });

            mapMarker.on('dragend', function() {
                const pos = mapMarker.getLatLng();
                updateMapMarkerPosition(pos.lat, pos.lng);
            });
        }

        function updateMapMarkerPosition(lat, lng) {
            mapMarker.setLatLng([lat, lng]);
            mapInstance.panTo([lat, lng]);
            
            document.getElementById('custLat').value = lat.toFixed(6);
            document.getElementById('custLng').value = lng.toFixed(6);
            document.getElementById('coordsDisplay').innerText = `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
        }

        function getCurrentLocationGPS() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    updateMapMarkerPosition(position.coords.latitude, position.coords.longitude);
                }, function() {
                    alert('Tidak dapat mendeteksi lokasi GPS Anda. Silakan tentukan titik lokasi pada peta.');
                });
            } else {
                alert('Browser Anda tidak mendukung Geolocation.');
            }
        }

        // WHATSAPP ORDER DISPATCH
        function submitOrderToWhatsApp(e) {
            e.preventDefault();

            const name = document.getElementById('custName').value;
            const phone = document.getElementById('custPhone').value;
            const kabupaten = document.getElementById('regKabupaten').value;
            const kecamatan = document.getElementById('regKecamatan').value;
            const address = document.getElementById('custAddress').value;
            const lat = document.getElementById('custLat').value;
            const lng = document.getElementById('custLng').value;
            const accessEngkel = document.getElementById('accessEngkel').value;
            const accessLong = document.getElementById('accessLong').value;

            const totalWeight = shoppingCart.reduce((sum, i) => sum + (i.weightKg * i.qty), 0);
            const totalPrice = shoppingCart.reduce((sum, i) => sum + (i.price * i.qty), 0);

            let itemsText = '';
            shoppingCart.forEach((item, index) => {
                itemsText += `${index + 1}. *${item.title}*\n   - Qty: ${item.qty} x Rp ${item.price.toLocaleString('id-ID')}\n   - Subtotal: Rp ${(item.price * item.qty).toLocaleString('id-ID')} (${(item.weightKg * item.qty).toFixed(1)} Kg)\n`;
            });

            const mapsUrl = `https://maps.google.com/?q=${lat},${lng}`;

            const waMessage = `*PESANAN BARU - BALI BESI MURAH*\n` +
                `----------------------------------------\n` +
                `*INFORMASI PEMESAN:*\n` +
                `• Nama: ${name}\n` +
                `• No. WhatsApp: ${phone}\n\n` +
                `*ALAMAT PENGIRIMAN:*\n` +
                `• Kabupaten/Kota: ${kabupaten}, Bali\n` +
                `• Kecamatan: ${kecamatan}\n` +
                `• Detail Alamat: ${address}\n\n` +
                `• Akses mobil engkel / truk 3/4: ${accessEngkel}\n` +
                `• Akses truk long: ${accessLong}\n\n` +
                `*TITIK LOKASI PETA (GPS):*\n` +
                `📌 ${mapsUrl}\n\n` +
                `*DAFTAR MATERIAL:* \n` +
                `${itemsText}\n` +
                `----------------------------------------\n` +
                `*ESTIMASI TONASE:* ${totalWeight.toFixed(1)} Kg (${(totalWeight/1000).toFixed(2)} Ton)\n` +
                `*ESTIMASI TOTAL MATERIAL (PERLU KONFIRMASI):* *Rp ${totalPrice.toLocaleString('id-ID')}*\n` +
                `----------------------------------------\n` +
                `Mohon konfirmasi stok, harga, kendaraan yang sesuai, ongkos kirim, dan petunjuk pembayaran sebelum transaksi. Terima kasih.`;

            const adminPhone = "628218187917";
            const encodedUrl = `https://wa.me/${adminPhone}?text=${encodeURIComponent(waMessage)}`;

            shoppingCart = [];
            updateCartUI();
            closeCheckoutModal();
            window.open(encodedUrl, '_blank');
        }

        // STEEL WEIGHT CALCULATOR (RAB TOOL)
        function calculateSteelWeight() {
            const type = document.getElementById('calcType').value;
            const dim1 = parseFloat(document.getElementById('calcDim1').value) || 0;
            const dim2 = parseFloat(document.getElementById('calcDim2').value) || 0;
            const length = parseFloat(document.getElementById('calcLength').value) || 0;
            const qty = parseFloat(document.getElementById('calcQty').value) || 0;

            const dimGroup2 = document.getElementById('dimGroup2');
            const lblDim1 = document.getElementById('lblDim1');
            const lblDim2 = document.getElementById('lblDim2');
            const note = document.getElementById('calcFormulaNote');

            let weightPerMeter = 0;

            if (type === 'beton_polos' || type === 'beton_ulir') {
                dimGroup2.classList.add('hidden');
                lblDim1.innerText = "Diameter Besi (mm)";
                weightPerMeter = 0.006165 * Math.pow(dim1, 2);
                note.innerText = "*Perhitungan rumus baku SNI Besi Beton (0.006165 x d²).";
            } else if (type === 'hollow') {
                dimGroup2.classList.remove('hidden');
                lblDim1.innerText = "Lebar Sisi (mm)";
                lblDim2.innerText = "Tebal Dinding (mm)";
                weightPerMeter = ((dim1 * 4) / 3.14159 - dim2) * dim2 * 0.02466;
                note.innerText = "*Perhitungan tebal standar pipa kotak/hollow galvanis.";
            } else if (type === 'wf') {
                dimGroup2.classList.add('hidden');
                lblDim1.innerText = "Ukuran Tinggi Profil WF (mm)";
                weightPerMeter = dim1 * 0.095;
                note.innerText = "*Perhitungan pendekatan tabel standar profil WF & H-Beam.";
            }

            const weightPerBatang = weightPerMeter * length;
            const totalWeight = weightPerBatang * qty;

            document.getElementById('calcTotalWeight').innerHTML = `${totalWeight.toFixed(1)} <span class="text-base font-normal text-slate-300">Kg (${(totalWeight/1000).toFixed(2)} Ton)</span>`;
        }

        function sendCalcToWA() {
            const type = document.getElementById('calcType').options[document.getElementById('calcType').selectedIndex].text;
            const dim1 = document.getElementById('calcDim1').value;
            const length = document.getElementById('calcLength').value;
            const qty = document.getElementById('calcQty').value;
            const weight = document.getElementById('calcTotalWeight').innerText;

            const text = `Halo Bali Besi Murah, saya menghitung estimasi berat di website:\n\n- Spesifikasi: ${type}\n- Dimensi: ${dim1} mm\n- Panjang: ${length} m\n- Jumlah: ${qty} Batang\n- Estimasi Berat Total: ${weight}\n\nMohon informasi penawaran harganya. Terima kasih!`;
            window.open(`https://wa.me/628218187917?text=${encodeURIComponent(text)}`, '_blank');
        }

        // INITIALIZE APPLICATION
        window.onload = function() {
            renderProducts(PRODUCTS_DATA);
            calculateSteelWeight();

            document.getElementById('mobileMenuBtn').addEventListener('click', () => {
                document.getElementById('mobileMenu').classList.toggle('hidden');
            });
        };
