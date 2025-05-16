// Always reset to light mode on page load
window.addEventListener("DOMContentLoaded", () => {
    const prefersLight = 'default';
    const themeKey = 'md-color-scheme';
    if (localStorage.getItem(themeKey) !== prefersLight) {
      localStorage.setItem(themeKey, prefersLight);
      location.reload(); // Apply the new theme on reload
    }
  });
  