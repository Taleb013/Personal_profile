// Theme Toggle Script
const toggleBtn = document.getElementById('theme-toggle');
const root = document.body;

function setTheme(theme) {
  root.classList.remove('light-theme', 'dark-theme');
  root.classList.add(theme + '-theme');
  toggleBtn.textContent = theme === 'light' ? '🌙' : '☀️';
  localStorage.setItem('theme', theme);
}

// Initialize theme
const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

toggleBtn.addEventListener('click', () => {
  const newTheme = root.classList.contains('light-theme') ? 'dark' : 'light';
  setTheme(newTheme);
});
