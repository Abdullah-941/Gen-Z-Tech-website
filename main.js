/* ============================================================
   GEN-Z TECH - GLOBAL DYNAMIC ENGINE (main.js)
   Handles Cart Persistence, Toast Notifications & Keyboard Events
   ============================================================ */

function readStoredArray(key) {
  try {
    const storedValue = JSON.parse(localStorage.getItem(key));
    return Array.isArray(storedValue) ? storedValue : [];
  } catch (error) {
    try {
      localStorage.removeItem(key);
    } catch (storageError) {
      // Storage may be unavailable in privacy-restricted browser contexts.
    }
    return [];
  }
}

let cart = readStoredArray('genz_cart');

document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  setupGlobalKeyboardEvents();
});

// Update Cart Badge Across Pages
function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (badge) {
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    badge.innerText = totalCount;
  }
}

// Add Item To Cart
function addToCart(title, price, icon) {
  const existing = cart.find(item => item.title === title);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ title, price: Number(price), icon: icon || '⚡', qty: 1 });
  }
  localStorage.setItem('genz_cart', JSON.stringify(cart));
  updateCartBadge();
  showToastNotification(`Added "${title}" to your Bag!`);
}

// Interactive Toast Notification
function showToastNotification(message) {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    Object.assign(toast.style, {
      position: 'fixed',
      bottom: '30px',
      left: '30px',
      background: 'rgba(28, 22, 12, 0.95)',
      backdropFilter: 'blur(10px)',
      color: '#fbbf24',
      padding: '14px 24px',
      borderRadius: '12px',
      border: '1px solid rgba(245, 158, 11, 0.4)',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.8), 0 0 20px rgba(245, 158, 11, 0.25)',
      zIndex: '10000',
      fontWeight: '700',
      fontSize: '0.92rem',
      transition: 'all 0.3s ease',
      transform: 'translateY(20px)',
      opacity: '0'
    });
    document.body.appendChild(toast);
  }
  toast.innerText = message;
  toast.style.transform = 'translateY(0)';
  toast.style.opacity = '1';

  setTimeout(() => {
    toast.style.transform = 'translateY(20px)';
    toast.style.opacity = '0';
  }, 2500);
}

// Global Keyboard Shortcut Listener
function setupGlobalKeyboardEvents() {
  window.addEventListener('keydown', (e) => {
    // Press 'c' to view quick cart dialog
    if ((e.key === 'c' || e.key === 'C') && !['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) {
      if (cart.length === 0) {
        alert("🛒 Gen-Z Tech Bag:\n\nYour shopping bag is currently empty! Explore the Products or Setup Builder to add items.");
      } else {
        const summary = cart.map(i => `• ${i.title} (x${i.qty}) = Rs. ${(i.price * i.qty).toLocaleString()}`).join('\n');
        const grandTotal = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
        alert(`🛒 Gen-Z Tech Bag Summary:\n\n${summary}\n\nTotal: Rs. ${grandTotal.toLocaleString()}\n(Visit Products or Contact to checkout)`);
      }
    }
  });
}
