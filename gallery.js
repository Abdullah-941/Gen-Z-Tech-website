/* ============================================================
   GEN-Z TECH - GALLERY & LIGHTBOX MODAL ENGINE (gallery.js)
   Demonstrating: DOM Injection, Modal Events, Keyboard Navigation
   ============================================================ */

const GALLERY_DATA = [
  {
    id: 1,
    title: "Obsidian Amber Executive Suite",
    category: "minimal",
    author: "Zayn Sheikh",
    img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80",
    desc: "A warm walnut and bronze desktop setup featuring an ultrawide monitor, screenbar reading light, and the VibeKey 75% mechanical keyboard.",
    specs: {
      keyboard: "VibeKey 75% Custom Lubed",
      audio: "Gen-Z Studio Wireless Headset",
      mouse: "ErgoMaster Vertical Wireless",
      desk: "Solid Walnut 72-Inch Standing Desk"
    }
  },
  {
    id: 2,
    title: "Cyberpunk Neo-Tokyo Battlestation",
    category: "cyber",
    author: "Fahad Ali",
    img: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=1200&q=80",
    desc: "High-contrast esports combat arena powered by an RTX 4080 Super and 240Hz OLED gaming display with ambient LED backlighting.",
    specs: {
      keyboard: "Apex60 Compact Mechanical",
      audio: "CyberPods Low-Latency TWS",
      mouse: "Pulse Ultralight 54g (8KHz)",
      display: "34-Inch Curved QD-OLED 240Hz"
    }
  },
  {
    id: 3,
    title: "Acoustic Creator & Podcasting Station",
    category: "audio",
    author: "Sarah Mansoor",
    img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80",
    desc: "Dedicated voiceover and music production suite equipped with cardioid XLR mics, acoustic sound panels, and dual high-resolution studio monitors.",
    specs: {
      mic: "SonicCast USB Studio Condenser",
      audio: "AudioPro Transparent IEMs",
      headphones: "Studio Master ANC Over-Ear",
      interface: "USB-C 24-bit Lossless Preamp"
    }
  },
  {
    id: 4,
    title: "Stealth Compact ITX Power Station",
    category: "itx",
    author: "Bilal Raza",
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1200&q=80",
    desc: "11-liter small form factor aluminum ITX chassis packing an AMD Ryzen 7 7800X3D with custom braided zero-clutter cabling.",
    specs: {
      chassis: "FormD T1 Anodized Aluminum 11L",
      cpu: "Ryzen 7 7800X3D Liquid Cooled",
      keyboard: "VibeKey Low-Profile Ergonomic",
      mouse: "SilentClick Dual-Mode Wireless"
    }
  },
  {
    id: 5,
    title: "Warm Amber Minimalist Coding Desk",
    category: "minimal",
    author: "Danyal Mirza",
    img: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=1200&q=80",
    desc: "Clean programming workstation emphasizing ergonomic posture, mechanical tactile key feedback, and zero blue-light eye fatigue.",
    specs: {
      keyboard: "SilentOffice 80% TKL Quiet",
      stand: "AeroStand Sandblasted Riser",
      charger: "DeskShield 3-in-1 Charging Stand",
      lighting: "ScreenBar Monitor Asymmetric Lamp"
    }
  },
  {
    id: 6,
    title: "Midnight Streamer Command Center",
    category: "cyber",
    author: "Hamza Tariq",
    img: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=1200&q=80",
    desc: "Dual-PC streaming powerhouse equipped with dynamic XLR mic boom arm, key lighting, and custom macro keys.",
    specs: {
      keyboard: "ProType 104-Key Wireless",
      mouse: "SniperPro 12-Button MMO",
      mic: "Broadcast Dynamic Studio Mic",
      camera: "StreamVision 2K 60FPS Pro"
    }
  },
  {
    id: 7,
    title: "Analogue & Digital Synthesizer Studio",
    category: "audio",
    author: "Ayesha Malik",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
    desc: "Electronic sound production workstation combining MIDI keyboards, analog synthesizers, and reference planar studio headphones.",
    specs: {
      headphones: "Gen-Z AirPods Max Aluminum",
      audio: "Type-C Lossless 24-bit DAC",
      pad: "Apex Extended Micro-Weave (90x40)",
      cables: "Thunderbolt 4 40Gbps High-Speed"
    }
  },
  {
    id: 8,
    title: "Scandinavian Oak SFF Setup",
    category: "itx",
    author: "Kashif Nawaz",
    img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1200&q=80",
    desc: "Natural light wood textures paired with high-performance matte obsidian peripherals and wireless Qi desktop power.",
    specs: {
      charger: "VoltGaN 65W Desktop Station",
      keyboard: "VibeKey 75% Custom Gasket",
      mouse: "Pulse Ultralight 54g",
      pad: "Felt & Leather Minimalist Mat"
    }
  },
  {
    id: 9,
    title: "Dual Vertical Monitor Productivity Hub",
    category: "minimal",
    author: "Omer Farooq",
    img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80",
    desc: "Designed for software development with dual 27-inch 4K displays mounted on heavy-duty gas spring arms.",
    specs: {
      arm: "Heavy Duty Dual Gas Spring Mount",
      keyboard: "MacType Dual-Layout Mechanical",
      mouse: "ErgoMaster Vertical Ergonomic",
      power: "VoltGaN 100W 4-Port Hub"
    }
  },
  {
    id: 10,
    title: "High-FPS Competitive Esports Pit",
    category: "cyber",
    author: "Saad Qureshi",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1200&q=80",
    desc: "Zero-compromise FPS battle environment featuring glass mouse skates, 360Hz gaming panel, and lightweight honeycomb peripheral gear.",
    specs: {
      mouse: "ApexStrike 8KHz Polling Esports",
      skates: "Superglide Tempered Glass Feet",
      keyboard: "Apex60 Ultra-Compact 60%",
      audio: "CyberPods Low-Latency 38ms"
    }
  },
  {
    id: 11,
    title: "Hi-Res Mastering & Mixing Console",
    category: "audio",
    author: "Rehan Siddiqui",
    img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80",
    desc: "Precision acoustic environment calibrated with neutral frequency response studio monitors and acoustic diffuser panels.",
    specs: {
      mic: "SonicCast Studio Condenser",
      headphones: "Studio Master ANC Reference",
      cables: "Gold-Plated Braided Studio Wires",
      sound: "Dual-Driver Lossless IEMs"
    }
  },
  {
    id: 12,
    title: "Portable SFF LAN Party Rig",
    category: "itx",
    author: "Zubair Hashmi",
    img: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=1200&q=80",
    desc: "Backpack-portable high-spec gaming rig designed for traveling creators, tournament players, and remote developers.",
    specs: {
      powerbank: "VoltPulse 20,000mAh 65W Laptop Bank",
      keyboard: "SlimType Low-Profile Board",
      audio: "AuraBuds Ultra Hybrid ANC",
      mouse: "PulseMini Travel Optical"
    }
  }
];

// Likes tracking stored in localStorage
let likesState = {};

try {
  const storedLikes = JSON.parse(localStorage.getItem('genz_gallery_likes'));
  likesState = storedLikes && typeof storedLikes === 'object' && !Array.isArray(storedLikes) ? storedLikes : {};
} catch (error) {
  try {
    localStorage.removeItem('genz_gallery_likes');
  } catch (storageError) {
    // Storage may be unavailable in privacy-restricted browser contexts.
  }
}

// Active Filter and Lightbox index state
let activeCategory = 'all';
let currentLightboxIndex = 0;
let visibleSetups = [];

document.addEventListener('DOMContentLoaded', () => {
  renderGallery();
  setupLightboxKeyboardEvents();
});

// Category Filter Switcher
function filterGallery(category, btn) {
  activeCategory = category;
  document.querySelectorAll('.gallery-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderGallery();
}

// Render Gallery Cards
function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = '';

  visibleSetups = GALLERY_DATA.filter(item => {
    return activeCategory === 'all' || item.category === activeCategory;
  });

  visibleSetups.forEach((setup, index) => {
    const card = document.createElement('div');
    card.className = 'gallery-card';

    const currentLikes = likesState[setup.id] || (12 + (setup.id * 7));

    card.innerHTML = `
      <div class="gallery-thumb-box" onclick="openLightbox(${index})">
        <span class="gallery-badge">${setup.category}</span>
        <img src="${setup.img}" alt="${setup.title}" loading="lazy" referrerpolicy="no-referrer" />
      </div>
      <div class="gallery-body">
        <div onclick="openLightbox(${index})">
          <h3 class="gallery-title">${setup.title}</h3>
          <p class="gallery-desc">${setup.desc}</p>
        </div>
        <div class="gallery-meta">
          <span style="font-size:0.8rem; color:var(--text-muted);">Crafted by <strong>${setup.author}</strong></span>
          <button class="like-btn" onclick="toggleLike(event, ${setup.id}, this)">
            ❤️ <span>${currentLikes}</span>
          </button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

// Heart Like interaction
function toggleLike(event, setupId, btn) {
  event.stopPropagation();
  let count = likesState[setupId] || (12 + (setupId * 7));
  count += 1;
  likesState[setupId] = count;
  localStorage.setItem('genz_gallery_likes', JSON.stringify(likesState));
  btn.querySelector('span').innerText = count;
  btn.style.transform = 'scale(1.15)';
  setTimeout(() => { btn.style.transform = 'scale(1)'; }, 200);
}

// Open Lightbox
function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightboxContent();
  document.getElementById('lightboxModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close Lightbox
function closeLightbox() {
  document.getElementById('lightboxModal').classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Lightbox navigation (Next / Prev)
function navLightbox(direction) {
  currentLightboxIndex += direction;
  if (currentLightboxIndex < 0) currentLightboxIndex = visibleSetups.length - 1;
  if (currentLightboxIndex >= visibleSetups.length) currentLightboxIndex = 0;
  updateLightboxContent();
}

// Update Lightbox Modal content
function updateLightboxContent() {
  const item = visibleSetups[currentLightboxIndex];
  if (!item) return;

  document.getElementById('lightboxImg').src = item.img;
  document.getElementById('lightboxTitle').innerText = item.title;
  document.getElementById('lightboxCategory').innerText = `${item.category.toUpperCase()} SPECIFICATION`;
  document.getElementById('lightboxDesc').innerText = `${item.desc} (Custom built and curated by ${item.author}).`;

  const specsBox = document.getElementById('lightboxSpecs');
  specsBox.innerHTML = '';

  Object.keys(item.specs).forEach(key => {
    const val = item.specs[key];
    const pill = document.createElement('div');
    pill.className = 'spec-pill';
    pill.innerHTML = `<strong>${key}</strong><span>${val}</span>`;
    specsBox.appendChild(pill);
  });
}

// Inquire on custom build
function inquireSetup() {
  const item = visibleSetups[currentLightboxIndex];
  closeLightbox();
  window.location.href = `contact.html#orderSection`;
}

// Keyboard controls for modal
function setupLightboxKeyboardEvents() {
  window.addEventListener('keydown', (e) => {
    const modal = document.getElementById('lightboxModal');
    if (!modal.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navLightbox(-1);
    if (e.key === 'ArrowRight') navLightbox(1);
  });

  document.getElementById('lightboxModal').addEventListener('click', (e) => {
    if (e.target.id === 'lightboxModal') closeLightbox();
  });
}
