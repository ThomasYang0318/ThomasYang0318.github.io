(() => {
  try {
    const theme = window.localStorage.getItem('portfolio-theme');
    if (theme === 'dark' || theme === 'light') {
      document.documentElement.dataset.theme = theme;
    }
  } catch {
    // System color preference remains the fallback when storage is unavailable.
  }
  let language;
  try { language = window.localStorage.getItem('portfolio-language'); } catch { /* Optional preference. */ }
  document.documentElement.lang = language === 'en' || language === 'zh-TW'
    ? language
    : (navigator.languages?.[0] || navigator.language || '').toLowerCase().startsWith('zh') ? 'zh-TW' : 'en';
})();
