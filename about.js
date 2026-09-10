/* ============================================================
   GEN-Z TECH - ABOUT ENGINE (about.js)
   Demonstrating: Animated Counters, DOM Data Switching
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initMilestoneCounters();
  renderBenchmarkTable(false);
});

// 1. Animated Milestone Count-Up Engine
function initMilestoneCounters() {
  const counters = document.querySelectorAll('.stat-number');
  const speed = 40;

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const increment = Math.ceil(target / speed);

    const updateCount = () => {
      count += increment;
      if (count < target) {
        counter.innerText = count.toLocaleString();
        setTimeout(updateCount, 25);
      } else {
        const suffix = target === 99 ? '%' : target === 1 ? 'ms' : '+';
        counter.innerText = target.toLocaleString() + suffix;
      }
    };

    updateCount();
  });
}

// 2. Interactive Hardware Benchmark Datasets
let isOfficeMode = false;

const GAMING_BENCHMARKS = [
  { attr: 'Wireless Input Latency', genz: '0.125 ms (8KHz Polling)', standard: '8.000 ms (125Hz Polling)', adv: '64x Faster' },
  { attr: 'Keyboard Switch Lifespan', genz: '100 Million Keystrokes (Lubed)', standard: '20 Million Keystrokes (Membrane)', adv: '5x Durability' },
  { attr: 'Acoustic Noise Reduction', genz: '-38 dB Hybrid Multi-Mic ANC', standard: '-15 dB Passive Foam', adv: '+150% Isolation' },
  { attr: 'Power Bank Fast Charging', genz: '65W - 100W PD 3.0 Laptop Ready', standard: '10W Slow USB Output', adv: '10x Power Delivery' },
  { attr: 'Mouse Sensor Tracking', genz: 'PAW3395 (26,000 DPI / 650 IPS)', standard: 'Budget Sensor (1,600 DPI)', adv: 'Flawless Tracking' }
];

const OFFICE_BENCHMARKS = [
  { attr: 'Acoustic Switch Decibels', genz: '35 dB (Silent Peach Dampened)', standard: '65 dB (Loud Blue Clicky)', adv: 'Library Quiet' },
  { attr: 'Ergonomic Handshake Angle', genz: '57° Natural Posture', standard: 'Flat 0° Pronation', adv: 'Zero Wrist Strain' },
  { attr: 'Continuous Battery Life', genz: '80 Hours (VoltBand Bluetooth)', standard: '12 Hours Battery', adv: '6.5x Endurance' },
  { attr: 'Laptop Stand Dissipation', genz: 'Passive Cutout Aluminum (-8°C)', standard: 'Plastic Enclosure (+4°C)', adv: 'Cooler Operation' },
  { attr: 'Monitor Screen Reflection', genz: '0% Asymmetric Light Bar', standard: 'Overhead Harsh Glare', adv: 'Zero Eye Fatigue' }
];

function renderBenchmarkTable(officeMode) {
  const data = officeMode ? OFFICE_BENCHMARKS : GAMING_BENCHMARKS;
  const tbody = document.getElementById('benchmarkBody');
  if (!tbody) return;

  tbody.innerHTML = '';
  data.forEach(row => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${row.attr}</strong></td>
      <td class="highlight-cell">${row.genz}</td>
      <td style="color:var(--text-muted);">${row.standard}</td>
      <td><span class="badge-tag" style="margin-bottom:0; font-size:0.75rem;">${row.adv}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

function toggleBenchmarkView() {
  isOfficeMode = !isOfficeMode;
  const btn = document.getElementById('toggleBenchmarkBtn');

  if (isOfficeMode) {
    if (btn) btn.innerText = 'Switch to Esports Mode';
    renderBenchmarkTable(true);
    showToastNotification('Switched benchmark to Ergonomic Office profile.');
  } else {
    if (btn) btn.innerText = 'Switch to Office Mode';
    renderBenchmarkTable(false);
    showToastNotification('Switched benchmark to Esports Flagship profile.');
  }
}