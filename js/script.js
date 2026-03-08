// Smooth scrolling for anchor links (nav menu)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();  // Prevent default jump

    const targetId = this.getAttribute('href');           // e.g. "#rental"
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'   // aligns to top of section
      });
    }
  });
});
// Contact Form Animation & Feedback
const contactForm = document.querySelector('#contact form');
const submitBtn = document.getElementById('submitBtn');
const loadingDiv = document.getElementById('formLoading');
const successDiv = document.getElementById('formSuccess');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    // Show loading
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    loadingDiv.classList.remove('d-none');

    // Optional: simulate delay for demo (remove in production if Formspree is fast)
    // setTimeout(() => { ... }, 1500);  ← uncomment only for testing
  });

  // Listen for Formspree success (via hidden iframe or event – simple way)
  // For real success detection, Formspree redirects or posts – we can use a basic timeout
  contactForm.addEventListener('formspree:success', () => {   // optional if using their JS
    showSuccess();
  });

  // Fallback: assume success after ~2–3 seconds (common simple approach)
  setTimeout(() => {
    if (!successDiv.classList.contains('d-none')) return; // already shown
    showSuccess();
  }, 3000); // adjust time based on your Formspree speed
}

function showSuccess() {
  loadingDiv.classList.add('d-none');
  successDiv.classList.remove('d-none');
  submitBtn.disabled = false;
  submitBtn.textContent = 'Inquiry Sent!';
  submitBtn.classList.add('btn-success');
  contactForm.reset(); // clear form
}
// Back to Top Button
const backToTop = document.getElementById('backToTop');

if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.style.display = 'flex';
    } else {
      backToTop.style.display = 'none';
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}