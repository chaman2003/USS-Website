const STORAGE_KEY = 'uss-theme';

export function applyTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    document.documentElement.classList.toggle('dark', saved !== 'light');
  } catch {
    document.documentElement.classList.add('dark');
  }
}

export function toggleTheme() {
  const isDark = !document.documentElement.classList.contains('dark');
  document.documentElement.classList.toggle('dark', isDark);
  try {
    localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
  } catch {
    /* private browsing */
  }
}

applyTheme();

document.addEventListener('click', (event) => {
  if ((event.target as HTMLElement).closest('#theme-toggle')) {
    toggleTheme();
  }
});
