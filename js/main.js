// CCWAssistance - Main JavaScript

// Set current year in footer
document.querySelectorAll('#year').forEach(el => {
  el.textContent = new Date().getFullYear();
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// FAQ accordion
document.querySelectorAll('.faq-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const content = item.querySelector('.faq-content');
    const isOpen = item.classList.contains('open');

    // Close all other items
    document.querySelectorAll('.faq-item').forEach(other => {
      if (other !== item) {
        other.classList.remove('open');
        other.querySelector('.faq-content').classList.add('hidden');
      }
    });

    // Toggle current item
    if (isOpen) {
      item.classList.remove('open');
      content.classList.add('hidden');
    } else {
      item.classList.add('open');
      content.classList.remove('hidden');
    }
  });
});
