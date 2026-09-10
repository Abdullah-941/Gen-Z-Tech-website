/* ============================================================
   GEN-Z TECH - CONTACT & ORDER VALIDATION ENGINE (contact.js)
   Demonstrating: Regex Validation, Error DOM Toggling, Cart Autofill
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  autofillCartDetails();
});

// Automatically fills the message box with cart contents if the user navigated from Products or Builder
function autofillCartDetails() {
  const msgField = document.getElementById('message');
  const inqSelect = document.getElementById('inquiryType');

  if (typeof cart !== 'undefined' && cart.length > 0 && msgField && inqSelect) {
    inqSelect.value = 'order';

    const itemsSummary = cart
      .map(item => `• ${item.title} (Qty: ${item.qty}) — Rs. ${(item.price * item.qty).toLocaleString()}`)
      .join('\n');

    const grandTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    msgField.value = `Hello Gen-Z Tech Team,\n\nI would like to place an order for the hardware in my bag:\n${itemsSummary}\n\nTotal Estimated Price: Rs. ${grandTotal.toLocaleString()}\n\nPlease verify stock availability and provide Cash-on-Delivery payment confirmation for Karachi/Nationwide delivery.`;
  }
}

// Strict Form Validation
function validateAndSubmit(event) {
  event.preventDefault();

  let isValid = true;

  // Input Values
  const nameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const typeInput = document.getElementById('inquiryType');
  const messageInput = document.getElementById('message');

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const type = typeInput.value;
  const message = messageInput.value.trim();

  // Error Labels
  const nameErr = document.getElementById('nameError');
  const emailErr = document.getElementById('emailError');
  const phoneErr = document.getElementById('phoneError');
  const typeErr = document.getElementById('typeError');
  const msgErr = document.getElementById('messageError');

  // 1. Full Name Validation (At least 3 characters)
  if (name.length < 3) {
    nameErr.style.display = 'block';
    nameInput.style.borderColor = '#ef4444';
    isValid = false;
  } else {
    nameErr.style.display = 'none';
    nameInput.style.borderColor = 'var(--border-glass)';
  }

  // 2. Email Validation (Standard RFC regex)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailErr.style.display = 'block';
    emailInput.style.borderColor = '#ef4444';
    isValid = false;
  } else {
    emailErr.style.display = 'none';
    emailInput.style.borderColor = 'var(--border-glass)';
  }

  // 3. Phone Validation (Pakistani standard 11 digits starting with 03)
  const phonePattern = /^03\d{9}$/;
  if (!phonePattern.test(phone)) {
    phoneErr.style.display = 'block';
    phoneInput.style.borderColor = '#ef4444';
    isValid = false;
  } else {
    phoneErr.style.display = 'none';
    phoneInput.style.borderColor = 'var(--border-glass)';
  }

  // 4. Inquiry Type Selection
  if (!type) {
    typeErr.style.display = 'block';
    typeInput.style.borderColor = '#ef4444';
    isValid = false;
  } else {
    typeErr.style.display = 'none';
    typeInput.style.borderColor = 'var(--border-glass)';
  }

  // 5. Message Length (At least 10 characters)
  if (message.length < 10) {
    msgErr.style.display = 'block';
    messageInput.style.borderColor = '#ef4444';
    isValid = false;
  } else {
    msgErr.style.display = 'none';
    messageInput.style.borderColor = 'var(--border-glass)';
  }

  // Final Action on Successful Validation
  if (isValid) {
    // If placing an order, clear the cart
    if (type === 'order' && typeof cart !== 'undefined' && cart.length > 0) {
      cart = [];
      localStorage.setItem('genz_cart', JSON.stringify(cart));
      if (typeof updateCartBadge === 'function') updateCartBadge();
    }

    alert(`✅ Thank you, ${name}!\n\nYour transmission for "${type.toUpperCase()}" has been dispatched.\nOur team will contact you via WhatsApp / Phone at ${phone}.`);
    document.getElementById('contactForm').reset();
    showToastNotification('Inquiry submitted successfully!');
  }
}