// Theme toggle and persistence
const toggleBtn = document.getElementById('theme-toggle');
const root = document.body;
function setTheme(theme) {
  root.classList.remove('light-theme','dark-theme');
  root.classList.add(`${theme}-theme`);
  toggleBtn.textContent = theme === 'light' ? '🌙' : '☀️';
  localStorage.setItem('theme', theme);
}
const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);
toggleBtn.addEventListener('click', () => {
  const newTheme = root.classList.contains('light-theme') ? 'dark' : 'light';
  setTheme(newTheme);
});

// Optional: log clicks on skill icons
document.querySelectorAll('#skills .skill-icon').forEach(icon => {
  icon.addEventListener('click', () => {
    console.log(`Navigated to ${icon.parentElement.href}`);
  });
});
