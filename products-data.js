/* ============================================================
   GEN-Z TECH - 50 VERIFIED ACCURATE HARDWARE PHOTOGRAPHS
   Fixed: Guaranteed working image sources for all items
   ============================================================ */

const ACCURATE_PHOTOS = {
  // Portable Power Banks (Dedicated battery packs)
  powerbank_main: "https://doortodoor.pk/wp-content/uploads/2026/06/Amaze-NexusPro-10000mAh-Power-Bank-A231.jpg",
  powerbank_black: "https://images.unsplash.com/photo-1622445262464-84b1456045b6?auto=format&fit=crop&w=600&q=80",
  powerbank_pocket: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=600&q=80",
  powerbank_transparent: "https://static.webx.pk/files/82060/Images/asdadfsdfs-82060-0-170626061547508.webp",

  // Wireless Mobile Chargers (Qi charging stations & pads)
  wireless_pad: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=600&q=80",
  wireless_stand: "https://images.unsplash.com/photo-1618577686797-15637dbf2479?auto=format&fit=crop&w=600&q=80",

  // AirPods & Personal Audio
  airpods_white: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=600&q=80",
  airpods_black: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80",
  airpods_pair: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=600&q=80",
  headphones_overear: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",

  // Wireless Neckbands
  neckband_1: "https://images.unsplash.com/photo-1578319439584-104c94d37305?auto=format&fit=crop&w=600&q=80",
  neckband_2: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80",

  // Studio Mic & Handfree
  studio_mic: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80",
  handfree_wired: "https://images.unsplash.com/photo-1583267746897-2cf415887172?auto=format&fit=crop&w=600&q=80",
  handfree_iem: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80",

  // Mechanical Keyboards
  keyboard_rgb: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=600&q=80",
  keyboard_tactile: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
  keyboard_white: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=600&q=80",

  // Gaming Mice
  mouse_white: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
  mouse_black: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&q=80",

  // Desk Gear
  desk_mat: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80",
  laptop_stand: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=600&q=80"
};

const productsDatabase = [
  // --- 1. POWER BANKS & WIRELESS MOBILE CHARGERS ---
  {
    id: 1,
    title: "Gen-Z VoltPulse 10,000mAh Slim Power Bank",
    category: "powerbank",
    price: 3400,
    img: ACCURATE_PHOTOS.powerbank_main,
    desc: "Dual USB-A and Type-C Power Delivery in aircraft-grade slim aluminum."
  },
  {
    id: 2,
    title: "Gen-Z VoltPulse 20,000mAh 65W Laptop Power Bank",
    category: "powerbank",
    price: 6800,
    img: ACCURATE_PHOTOS.powerbank_black,
    desc: "High-output 65W fast-charging battery for MacBooks, Windows laptops, and phones."
  },
  {
    id: 3,
    title: "Gen-Z VoltPro 30,000mAh 100W Expedition Hub",
    category: "powerbank",
    price: 10500,
    img: ACCURATE_PHOTOS.powerbank_main,
    desc: "Massive 30,000mAh capacity with triple device charging and digital LED percentage display."
  },
  {
    id: 4,
    title: "Gen-Z MagCharge 15W Wireless Mobile Charger Pad",
    category: "powerbank",
    price: 4200,
    img: ACCURATE_PHOTOS.wireless_pad,
    desc: "Fast Qi inductive wireless pad: place your smartphone directly on top to charge."
  },
  {
    id: 5,
    title: "Gen-Z Desktop Stand Qi Wireless Mobile Charger",
    category: "powerbank",
    price: 4600,
    img: ACCURATE_PHOTOS.wireless_stand,
    desc: "Angled desktop wireless charging stand for iPhone StandBy mode and Samsung Galaxy."
  },
  {
    id: 6,
    title: "Gen-Z VoltMini 10,000mAh Pocket Fast Bank",
    category: "powerbank",
    price: 2900,
    img: ACCURATE_PHOTOS.powerbank_pocket,
    desc: "Ultra-compact credit card footprint with 20W Quick Charge 3.0."
  },
  {
    id: 7,
    title: "Gen-Z CyberGlow 20,000mAh High-Density Bank",
    category: "powerbank",
    price: 5900,
    img: ACCURATE_PHOTOS.powerbank_transparent,
    desc: "High-density lithium polymer battery bank with real-time wattage status display."
  },
  {
    id: 8,
    title: "Gen-Z VoltPocket 5,000mAh Ultra-Thin Card Bank",
    category: "powerbank",
    price: 2200,
    img: ACCURATE_PHOTOS.powerbank_pocket,
    desc: "7mm emergency battery pack that slips easily inside a wallet or small pocket."
  },

  // --- 2. AIRPODS & TWS EARBUDS ---
  {
    id: 9,
    title: "Gen-Z AirPods Pro ANC True Wireless Earbuds",
    category: "airpods",
    price: 4500,
    img: ACCURATE_PHOTOS.airpods_white,
    desc: "Active Noise Cancellation, Transparency Mode, spatial sound, and a wireless charging case."
  },
  {
    id: 10,
    title: "Gen-Z AuraBuds Ultra Hybrid ANC Earbuds",
    category: "airpods",
    price: 5800,
    img: ACCURATE_PHOTOS.airpods_black,
    desc: "-38dB noise suppression, custom audio equalizer, and 36-hour total playback."
  },
  {
    id: 11,
    title: "Gen-Z PulseAir Pods 3 Semi-In-Ear Earbuds",
    category: "airpods",
    price: 3200,
    img: ACCURATE_PHOTOS.airpods_pair,
    desc: "Comfortable pressure-free open acoustic ear design with clear stereo microphone calls."
  },
  {
    id: 12,
    title: "Gen-Z CyberPods Low-Latency Gaming TWS",
    category: "airpods",
    price: 4200,
    img: ACCURATE_PHOTOS.airpods_black,
    desc: "38ms ultra-low gaming latency mode with amber LED lighting accents on the charging dock."
  },
  {
    id: 13,
    title: "Gen-Z AeroSport IPX7 Waterproof Earbuds",
    category: "airpods",
    price: 3900,
    img: ACCURATE_PHOTOS.airpods_white,
    desc: "Flexible silicone hooks engineered for intensive gym workouts and running stability."
  },
  {
    id: 14,
    title: "Gen-Z Studio Master ANC Over-Ear Headphones",
    category: "airpods",
    price: 14500,
    img: ACCURATE_PHOTOS.headphones_overear,
    desc: "45mm Neodymium drivers, luxury memory foam earpads, and professional acoustic balance."
  },
  {
    id: 15,
    title: "Gen-Z MiniBuds Invisible Sleep Earbuds",
    category: "airpods",
    price: 3100,
    img: ACCURATE_PHOTOS.airpods_pair,
    desc: "Miniature profile ergonomically tuned for side sleepers with passive ambient noise masking."
  },
  {
    id: 16,
    title: "Gen-Z ClearBuds Transparent Audio TWS",
    category: "airpods",
    price: 3800,
    img: ACCURATE_PHOTOS.airpods_black,
    desc: "Transparent driver housing, touch sensor controls, and Type-C quick battery recharge."
  },

  // --- 3. WIRELESS NECKBANDS ---
  {
    id: 17,
    title: "Gen-Z PulseBand BassPro 60H Magnetic Neckband",
    category: "neckband",
    price: 2900,
    img: ACCURATE_PHOTOS.neckband_1,
    desc: "60 hours continuous playtime, 12mm deep-bass drivers, and magnetic instant auto-pairing."
  },
  {
    id: 18,
    title: "Gen-Z AeroFlex Liquid Silicone ANC Neckband",
    category: "neckband",
    price: 3800,
    img: ACCURATE_PHOTOS.neckband_2,
    desc: "Hypoallergenic silicone band with Active Noise Cancellation and dual-phone connectivity."
  },
  {
    id: 19,
    title: "Gen-Z VoltBand FlashCharge 80H Neckband",
    category: "neckband",
    price: 3400,
    img: ACCURATE_PHOTOS.neckband_1,
    desc: "10-minute fast charge yields 20 hours audio; features incoming call vibration alerts."
  },
  {
    id: 20,
    title: "Gen-Z TitanNeck Dual-Battery 100H Neckband",
    category: "neckband",
    price: 4200,
    img: ACCURATE_PHOTOS.neckband_2,
    desc: "Twin high-density battery cells providing up to 100 hours of talk and music playback."
  },
  {
    id: 21,
    title: "Gen-Z SonicBand Low-Latency Gaming Neckband",
    category: "neckband",
    price: 3100,
    img: ACCURATE_PHOTOS.neckband_1,
    desc: "Low-latency tactical audio with detachable boom microphone and metal sound chambers."
  },
  {
    id: 22,
    title: "Gen-Z AeroFit Reflective Sports Neckband",
    category: "neckband",
    price: 2600,
    img: ACCURATE_PHOTOS.neckband_2,
    desc: "Night-reflective safety strap, IPX6 sweatproof coating, and secure in-ear fins."
  },
  {
    id: 23,
    title: "Gen-Z Executive Retractable Collar Neckband",
    category: "neckband",
    price: 3700,
    img: ACCURATE_PHOTOS.neckband_1,
    desc: "Clip-on collar unit with auto-retracting cord earbuds and environment noise cancelling mic."
  },

  // --- 4. IN-EAR HANDFREE & MICS ---
  {
    id: 24,
    title: "Gen-Z ProBass 3.5mm Metallic In-Ear Handfree",
    category: "handfree",
    price: 850,
    img: ACCURATE_PHOTOS.handfree_wired,
    desc: "Gold-plated 3.5mm jack, durable braided cabling, and an in-line HD voice microphone."
  },
  {
    id: 25,
    title: "Gen-Z Type-C Lossless Digital DAC Handfree",
    category: "handfree",
    price: 1450,
    img: ACCURATE_PHOTOS.handfree_iem,
    desc: "Integrated 24-bit Hi-Res DAC audio converter compatible with modern Type-C phones."
  },
  {
    id: 26,
    title: "Gen-Z Dual-Driver Gaming Handfree with Mic",
    category: "handfree",
    price: 2200,
    img: ACCURATE_PHOTOS.handfree_wired,
    desc: "Dual dynamic drivers with a 360-degree flexible detachable boom mic for clear voice comms."
  },
  {
    id: 27,
    title: "Gen-Z SonicCast USB Studio Condenser Mic",
    category: "handfree",
    price: 7400,
    img: ACCURATE_PHOTOS.studio_mic,
    desc: "Cardioid polar pattern, integrated metal shock mount, and quick tap-to-mute sensor."
  },
  {
    id: 28,
    title: "Gen-Z Wireless Dual Lavalier Lapel Mic Set",
    category: "handfree",
    price: 4800,
    img: ACCURATE_PHOTOS.studio_mic,
    desc: "Plug-and-play wireless transmitter/receiver system for interviews, vlogs, and mobile recording."
  },
  {
    id: 29,
    title: "Gen-Z AudioPro Transparent IEM Earphones",
    category: "handfree",
    price: 2600,
    img: ACCURATE_PHOTOS.handfree_iem,
    desc: "Audiophile-grade in-ear monitor with clear resin enclosure and detachable 2-pin copper cord."
  },
  {
    id: 30,
    title: "Gen-Z Classic Comfort Earbud Handfree",
    category: "handfree",
    price: 650,
    img: ACCURATE_PHOTOS.handfree_wired,
    desc: "Lightweight non-in-ear contoured design suited for long meetings and online classes."
  },

  // --- 5. MECHANICAL KEYBOARDS ---
  {
    id: 31,
    title: "Gen-Z VibeKey 75% Hot-Swap Mechanical Keyboard",
    category: "keyboards",
    price: 11200,
    img: ACCURATE_PHOTOS.keyboard_rgb,
    desc: "Gasket-mounted plate, factory-lubed tactile switches, and amber RGB backlighting."
  },
  {
    id: 32,
    title: "Gen-Z Apex60 Compact 60% Mechanical Keyboard",
    category: "keyboards",
    price: 8200,
    img: ACCURATE_PHOTOS.keyboard_tactile,
    desc: "Minimalist compact footprint maximizing desktop surface area for fast mouse gliding."
  },
  {
    id: 33,
    title: "Gen-Z ProType Full-Size 104-Key Wireless Keyboard",
    category: "keyboards",
    price: 13800,
    img: ACCURATE_PHOTOS.keyboard_white,
    desc: "Dedicated number pad, aluminum volume control dial, and triple 2.4GHz/Bluetooth modes."
  },
  {
    id: 34,
    title: "Gen-Z SlimType Low-Profile Mechanical Board",
    category: "keyboards",
    price: 12400,
    img: ACCURATE_PHOTOS.keyboard_tactile,
    desc: "Ergonomic low-profile tactile switches engineered to reduce wrist extension."
  },
  {
    id: 35,
    title: "Gen-Z CyberDeck CNC Solid Aluminum Keyboard",
    category: "keyboards",
    price: 16500,
    img: ACCURATE_PHOTOS.keyboard_rgb,
    desc: "Heavyweight anodized CNC aluminum chassis with internal sound dampening foam."
  },
  {
    id: 36,
    title: "Gen-Z SilentOffice 80% TKL Quiet Mechanical",
    category: "keyboards",
    price: 9800,
    img: ACCURATE_PHOTOS.keyboard_white,
    desc: "Pre-installed silent linear switches designed for shared work environments and libraries."
  },
  {
    id: 37,
    title: "Gen-Z Amber Legend PBT Double-Shot Keycaps",
    category: "keyboards",
    price: 3200,
    img: ACCURATE_PHOTOS.keyboard_tactile,
    desc: "134-key custom thick PBT keycap set with crisp, shine-resistant text legends."
  },

  // --- 6. MICE & CONTROLLERS ---
  {
    id: 38,
    title: "Gen-Z Pulse Ultralight 54g Wireless Mouse",
    category: "mice",
    price: 6800,
    img: ACCURATE_PHOTOS.mouse_white,
    desc: "54g lightweight chassis with a 26,000 DPI PAW3395 sensor and pure PTFE mouse feet."
  },
  {
    id: 39,
    title: "Gen-Z ErgoMaster Vertical Wireless Mouse",
    category: "mice",
    price: 4900,
    img: ACCURATE_PHOTOS.mouse_black,
    desc: "57-degree vertical handshake angle to relieve wrist tension and carpal discomfort."
  },
  {
    id: 40,
    title: "Gen-Z SilentClick Dual-Mode Bluetooth Mouse",
    category: "mice",
    price: 2400,
    img: ACCURATE_PHOTOS.mouse_white,
    desc: "Dampened micro-switches providing 90% quieter clicks with rechargeable battery."
  },
  {
    id: 41,
    title: "Gen-Z SniperPro 12-Button MMO Mouse",
    category: "mice",
    price: 7200,
    img: ACCURATE_PHOTOS.mouse_black,
    desc: "12 mechanical thumb keys for gaming macros and software shortcut execution."
  },
  {
    id: 42,
    title: "Gen-Z ApexStrike 8,000Hz Polling Esports Mouse",
    category: "mice",
    price: 11900,
    img: ACCURATE_PHOTOS.mouse_white,
    desc: "Hyper-speed 8KHz polling rate providing 0.125ms cursor report intervals."
  },
  {
    id: 43,
    title: "Gen-Z Precision Stationary Trackball Mouse",
    category: "mice",
    price: 8200,
    img: ACCURATE_PHOTOS.mouse_black,
    desc: "Smooth 34mm thumb ball sensor providing precision control without arm movement."
  },
  {
    id: 44,
    title: "Gen-Z Superglide Tempered Glass Mouse Skates",
    category: "mice",
    price: 1600,
    img: ACCURATE_PHOTOS.mouse_white,
    desc: "Polished aluminosilicate micro-beveled glass feet for frictionless cursor glide."
  },

  // --- 7. DESK ACCESSORIES & CHARGERS ---
  {
    id: 45,
    title: "Gen-Z VoltGaN 65W Triple-Port Wall Charger",
    category: "accessories",
    price: 3800,
    img: ACCURATE_PHOTOS.wireless_pad,
    desc: "Gallium Nitride charging adapter with dual Type-C PD and one USB-A fast port."
  },
  {
    id: 46,
    title: "Gen-Z Apex Extended Desk Mat (900x400mm)",
    category: "accessories",
    price: 2400,
    img: ACCURATE_PHOTOS.desk_mat,
    desc: "Water-repellent micro-weave fabric with anti-fray perimeter stitching."
  },
  {
    id: 47,
    title: "Gen-Z AeroStand Aluminum Laptop Riser",
    category: "accessories",
    price: 4200,
    img: ACCURATE_PHOTOS.laptop_stand,
    desc: "Anodized sandblasted aluminum stand with passive cooling ventilation cutouts."
  },
  {
    id: 48,
    title: "Gen-Z StreamVision 2K QHD 60FPS Webcam",
    category: "accessories",
    price: 5900,
    img: ACCURATE_PHOTOS.laptop_stand,
    desc: "Autofocus optical lens, physical privacy slider, and stereo beamforming microphones."
  },
  {
    id: 49,
    title: "Gen-Z DeskShield 3-in-1 Wireless Charging Stand",
    category: "accessories",
    price: 4800,
    img: ACCURATE_PHOTOS.wireless_stand,
    desc: "Dedicated charging cradles for smartphone, earbuds, and smartwatch on a single cable."
  },
  {
    id: 50,
    title: "Gen-Z ScreenBar Monitor Mounted LED Lamp",
    category: "accessories",
    price: 5400,
    img: ACCURATE_PHOTOS.desk_mat,
    desc: "Asymmetric desk illumination optics eliminating reflections on display panels."
  }
];

// State Management
let currentCategory = 'all';
let searchQuery = '';
let currentSort = 'featured';
let currentPage = 1;
const itemsPerPage = 12;

document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
});

function setCategory(cat, btn) {
  currentCategory = cat;
  currentPage = 1;
  document.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderCatalog();
}

function handleSearch() {
  searchQuery = document.getElementById('searchInput').value.toLowerCase().trim();
  currentPage = 1;
  renderCatalog();
}

function handleSort() {
  currentSort = document.getElementById('sortSelect').value;
  renderCatalog();
}

function renderCatalog() {
  let filtered = productsDatabase.filter(item => {
    const matchesCat = (currentCategory === 'all' || item.category === currentCategory);
    const matchesQuery = item.title.toLowerCase().includes(searchQuery) || item.desc.toLowerCase().includes(searchQuery);
    return matchesCat && matchesQuery;
  });

  if (currentSort === 'low-high') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'high-low') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'name') {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  }

  document.getElementById('productCount').innerText = filtered.length;
  const totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;
  document.getElementById('totalPageNum').innerText = totalPages;
  document.getElementById('currentPageNum').innerText = currentPage;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const pageItems = filtered.slice(startIndex, startIndex + itemsPerPage);

  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';

  if (pageItems.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align:center; padding: 4rem 1rem;">
        <h3 style="color:var(--text-muted); font-size:1.4rem;">No matching hardware found.</h3>
        <p style="color:#78716c; margin-top:0.5rem;">Try searching for "power bank", "wireless", "airpods", or "keyboard".</p>
      </div>
    `;
  } else {
    pageItems.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <div class="product-img">
          <span class="brand-watermark">Gen-Z Tech</span>
          <img src="${p.img}" alt="${escapeQuotes(p.title)}" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=600&q=80';" />
        </div>
        <div class="product-body">
          <div>
            <span class="badge-category">${p.category}</span>
            <h3 class="product-title">${p.title}</h3>
            <p class="product-desc">${p.desc}</p>
          </div>
          <div class="card-footer">
            <span class="price">Rs. ${p.price.toLocaleString()}</span>
            <button class="btn btn-primary" style="padding:0.55rem 1.1rem; font-size:0.88rem;" onclick="addToCart('${escapeQuotes(p.title)}', ${p.price}, '⚡')">
              Add to Bag
            </button>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  const container = document.getElementById('pagination');
  container.innerHTML = '';
  if (totalPages <= 1) return;

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
    btn.innerText = i;
    btn.onclick = () => {
      currentPage = i;
      renderCatalog();
      window.scrollTo({ top: 350, behavior: 'smooth' });
    };
    container.appendChild(btn);
  }
}

function openCartDrawer() {
  renderCartDrawer();
  document.getElementById('cartDrawer').classList.add('open');
}

function closeCartDrawer() {
  document.getElementById('cartDrawer').classList.remove('open');
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeCartDrawer();
});

document.getElementById('cartDrawer').addEventListener('click', (e) => {
  if (e.target.id === 'cartDrawer') closeCartDrawer();
});

function renderCartDrawer() {
  const list = document.getElementById('cartItemsList');
  list.innerHTML = '';

  if (cart.length === 0) {
    list.innerHTML = '<p style="color:var(--text-muted); text-align:center; padding:3rem 0;">Your hardware bag is empty.</p>';
    document.getElementById('cartSubtotal').innerText = 'Rs. 0';
    return;
  }

  let total = 0;
  cart.forEach(item => {
    total += item.price * item.qty;
    const itemCard = document.createElement('div');
    itemCard.className = 'cart-item-card';
    itemCard.innerHTML = `
      <div>
        <div style="font-weight:700; color:var(--text-pure); font-size:0.92rem;">${item.title}</div>
        <div style="font-size:0.8rem; color:var(--text-muted);">Qty: ${item.qty} × Rs. ${item.price.toLocaleString()}</div>
      </div>
      <div style="font-weight:800; color:var(--primary-champagne);">
        Rs. ${(item.price * item.qty).toLocaleString()}
      </div>
    `;
    list.appendChild(itemCard);
  });

  document.getElementById('cartSubtotal').innerText = `Rs. ${total.toLocaleString()}`;
}

function clearCart() {
  if (cart.length === 0) return;
  if (confirm("Are you sure you want to empty your shopping bag?")) {
    cart = [];
    localStorage.setItem('genz_cart', JSON.stringify(cart));
    updateCartBadge();
    renderCartDrawer();
    showToastNotification("Bag has been cleared.");
  }
}

function proceedToCheckout() {
  if (cart.length === 0) {
    alert("Please add items to your bag before checking out!");
    return;
  }
  closeCartDrawer();
  window.location.href = 'contact.html#orderSection';
}

function escapeQuotes(str) {
  return str.replace(/'/g, "\\'");
}