window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
      navbar.style.background = '#222';
  } else {
      navbar.style.background = '#333';
  }
});
