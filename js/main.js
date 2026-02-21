
document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    const details = button.nextElementSibling;
    details.classList.toggle('hidden');
    button.textContent = details.classList.contains('hidden')
      ? 'View Details'
      : 'Hide Details';
  });
});

// Search functionality
const searchInput = document.getElementById('search');
const programs = document.querySelectorAll('.program');

searchInput.addEventListener('input', () => {
  const value = searchInput.value.toLowerCase();

  programs.forEach(program => {
    const name = program.dataset.name;
    program.style.display = name.includes(value) ? 'grid' : 'none';
  });
});

// Navbar active state
document.querySelectorAll('.nav-links li').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelector('.nav-links li.active')?.classList.remove('active');
    item.classList.add('active');
  });
});
