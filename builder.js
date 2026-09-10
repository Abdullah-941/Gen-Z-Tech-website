/* ============================================================
   GEN-Z TECH - SETUP & PC BUILDER CALCULATION ENGINE
   ============================================================ */

// Component Database with Prices & Wattage
const BUILDER_CATALOG = {
  cpu: {
    label: "Processor (CPU)",
    icon: "🧠",
    options: [
      { id: "cpu_1", name: "AMD Ryzen 5 7600X (6-Core, 5.3 GHz)", price: 54000, watts: 105 },
      { id: "cpu_2", name: "AMD Ryzen 7 7800X3D (Gaming Benchmark King)", price: 115000, watts: 120 },
      { id: "cpu_3", name: "Intel Core i5-14600K (14 Cores, 20 Threads)", price: 79000, watts: 180 },
      { id: "cpu_4", name: "Intel Core i7-14700K (20 Cores, 28 Threads)", price: 122000, watts: 250 }
    ]
  },
  gpu: {
    label: "Graphics Card (GPU)",
    icon: "🎮",
    options: [
      { id: "gpu_1", name: "NVIDIA GeForce RTX 4060 8GB GDDR6", price: 88000, watts: 115 },
      { id: "gpu_2", name: "NVIDIA GeForce RTX 4070 Super 12GB", price: 185000, watts: 220 },
      { id: "gpu_3", name: "NVIDIA GeForce RTX 4080 Super 16GB", price: 310000, watts: 320 },
      { id: "gpu_4", name: "AMD Radeon RX 7800 XT 16GB", price: 165000, watts: 260 }
    ]
  },
  ram: {
    label: "Memory (RAM)",
    icon: "⚡",
    options: [
      { id: "ram_1", name: "16GB (2x8GB) DDR5 5600MHz RGB", price: 16500, watts: 15 },
      { id: "ram_2", name: "32GB (2x16GB) DDR5 6000MHz CL30 Amber RGB", price: 31000, watts: 20 },
      { id: "ram_3", name: "64GB (2x32GB) DDR5 6000MHz Creator Kit", price: 58000, watts: 30 }
    ]
  },
  storage: {
    label: "Solid State Drive (SSD)",
    icon: "💾",
    options: [
      { id: "ssd_1", name: "1TB PCIe 4.0 NVMe M.2 (5,000 MB/s)", price: 19500, watts: 8 },
      { id: "ssd_2", name: "2TB PCIe 4.0 High-Speed NVMe (7,400 MB/s)", price: 38000, watts: 10 },
      { id: "ssd_3", name: "4TB Ultra Creator NVMe M.2 SSD", price: 74000, watts: 12 }
    ]
  },
  psu: {
    label: "Power Supply (PSU)",
    icon: "🔌",
    options: [
      { id: "psu_1", name: "650W 80+ Bronze Certified Semi-Modular", price: 18000, watts: 0 },
      { id: "psu_2", name: "750W 80+ Gold Fully Modular ATX 3.0", price: 29000, watts: 0 },
      { id: "psu_3", name: "850W 80+ Gold Fully Modular High-End", price: 39000, watts: 0 },
      { id: "psu_4", name: "1000W 80+ Platinum Tier-A Power Block", price: 58000, watts: 0 }
    ]
  },
  case: {
    label: "Chassis / PC Case",
    icon: "🖥️",
    options: [
      { id: "case_1", name: "Gen-Z Obsidian Minimalist Tempered Glass ATX", price: 19500, watts: 10 },
      { id: "case_2", name: "Gen-Z CyberMesh Dual-Chamber Airflow Case", price: 26000, watts: 15 },
      { id: "case_3", name: "Gen-Z Panoramic Showcase Curved Glass Tower", price: 36000, watts: 20 }
    ]
  },
  peripherals: {
    label: "Setup Peripherals Bundle",
    icon: "⌨️",
    options: [
      { id: "per_none", name: "No Peripheral Bundle (Core Rig Only)", price: 0, watts: 0 },
      { id: "per_1", name: "Starter Bundle (VibeKey 75% + Pulse Ultralight Mouse)", price: 16500, watts: 5 },
      { id: "per_2", name: "Streamer Setup (VibeKey + Headset + Studio Condenser Mic)", price: 24500, watts: 10 },
      { id: "per_3", name: "Apex Pro Suite (Full-Size Board + 8KHz Mouse + ANC Max)", price: 38000, watts: 12 }
    ]
  }
};

// Selected State
const currentBuild = {};

document.addEventListener('DOMContentLoaded', () => {
  renderBuilderForm();
  recalculateBuild();
});

// Build form markup dynamically
function renderBuilderForm() {
  const container = document.getElementById('builderSelectors');
  container.innerHTML = '';

  Object.keys(BUILDER_CATALOG).forEach(catKey => {
    const section = BUILDER_CATALOG[catKey];

    const card = document.createElement('div');
    card.className = 'config-card';

    let optionsHtml = `<option value="">-- Choose ${section.label} --</option>`;
    section.options.forEach(opt => {
      optionsHtml += `
        <option value="${opt.id}">
          ${opt.name} — Rs. ${opt.price.toLocaleString()} ${opt.watts > 0 ? `(${opt.watts}W)` : ''}
        </option>
      `;
    });

    card.innerHTML = `
      <div class="config-header">
        <h3><span>${section.icon}</span> ${section.label}</h3>
        <span id="price_${catKey}" style="color:var(--primary-champagne); font-weight:700; font-size:0.95rem;">-</span>
      </div>
      <select class="component-select" id="select_${catKey}" onchange="handleComponentSelect('${catKey}')">
        ${optionsHtml}
      </select>
      <div class="spec-preview">
        <span id="desc_${catKey}">No item selected</span>
        <span id="watts_${catKey}"></span>
      </div>
    `;

    container.appendChild(card);
  });
}

// Handler when user chooses an item
function handleComponentSelect(category) {
  const selectElem = document.getElementById(`select_${category}`);
  const selectedId = selectElem.value;
  const section = BUILDER_CATALOG[category];

  if (!selectedId) {
    delete currentBuild[category];
    document.getElementById(`price_${category}`).innerText = '-';
    document.getElementById(`desc_${category}`).innerText = 'No item selected';
    document.getElementById(`watts_${category}`).innerText = '';
  } else {
    const item = section.options.find(opt => opt.id === selectedId);
    currentBuild[category] = item;
    document.getElementById(`price_${category}`).innerText = `Rs. ${item.price.toLocaleString()}`;
    document.getElementById(`desc_${category}`).innerText = item.name;
    document.getElementById(`watts_${category}`).innerText = item.watts > 0 ? `${item.watts}W Draw` : '';
  }

  recalculateBuild();
}

// Calculate total budget, estimated wattage and update UI
function recalculateBuild() {
  let totalCost = 0;
  let totalWatts = 0;
  const invoiceList = document.getElementById('invoiceList');
  invoiceList.innerHTML = '';

  const selectedKeys = Object.keys(currentBuild);

  if (selectedKeys.length === 0) {
    invoiceList.innerHTML = '<div style="text-align:center; padding:1.5rem 0;">No components chosen yet.</div>';
  } else {
    selectedKeys.forEach(catKey => {
      const item = currentBuild[catKey];
      totalCost += item.price;
      totalWatts += item.watts;

      const row = document.createElement('div');
      row.className = 'invoice-item';
      row.innerHTML = `
        <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:180px;">${item.name}</span>
        <strong style="color:var(--text-pure);">Rs. ${item.price.toLocaleString()}</strong>
      `;
      invoiceList.appendChild(row);
    });
  }

  // Base motherboard/fans continuous draw
  if (selectedKeys.length > 0) totalWatts += 50;

  // Update total cost & wattage readouts
  document.getElementById('grandTotal').innerText = `Rs. ${totalCost.toLocaleString()}`;
  document.getElementById('totalWatts').innerText = `${totalWatts} W`;

  // Wattage gauge visual
  const maxSafeReference = 850;
  const percent = Math.min(Math.round((totalWatts / maxSafeReference) * 100), 100);
  const bar = document.getElementById('wattBar');
  bar.style.width = `${percent}%`;

  const ratingText = document.getElementById('powerRatingText');
  if (totalWatts > 550) {
    ratingText.innerText = 'High Draw (750W+ Recommended)';
    ratingText.style.color = '#ef4444';
  } else if (totalWatts > 300) {
    ratingText.innerText = 'Medium Load (650W PSU recommended)';
    ratingText.style.color = 'var(--primary-champagne)';
  } else {
    ratingText.innerText = 'Optimal Load';
    ratingText.style.color = '#22c55e';
  }
}

// Push configured PC into global cart (main.js)
function addBuildToCart() {
  const requiredComponents = ['cpu', 'gpu', 'ram'];
  const missingComponents = requiredComponents.filter(component => !currentBuild[component]);

  if (missingComponents.length > 0) {
    alert("⚠️ Please configure a Processor, GPU, and RAM before saving your custom build!");
    return;
  }

  const selectedCount = Object.keys(currentBuild).length;

  const grandTotalText = document.getElementById('grandTotal').innerText.replace('Rs. ', '').replace(/,/g, '');
  const price = Number(grandTotalText);

  const summaryTitle = `Custom PC Rig (${selectedCount} Parts Configured)`;
  addToCart(summaryTitle, price, '🖥️');
  showToastNotification("Your custom PC build was added to the shopping bag!");
}

// Reset builder form
function resetBuilder() {
  if (confirm("Reset your customized PC build?")) {
    for (let key in currentBuild) delete currentBuild[key];
    renderBuilderForm();
    recalculateBuild();
    showToastNotification("Builder configuration reset.");
  }
}
