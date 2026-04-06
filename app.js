let currentLang = 'en';

async function loadTranslations(lang) {
  const response = await fetch(`${lang}.json`);
  return await response.json();
}

async function localizePage(lang) {
  const translations = await loadTranslations(lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key]) {
      el.innerText = translations[key];
      // If element has tooltip-text class, also update it
      if (el.classList.contains('tooltip-text')) {
        el.innerText = translations[key];
      }
    }
  });

  // Update alt attributes for images if needed
  document.querySelectorAll('.image-tooltip-container img').forEach(img => {
    const key = img.getAttribute('alt-key'); // optional custom attribute
    if (key && translations[key]) {
      img.alt = translations[key];
      img.nextElementSibling.innerText = translations[key];
    }
  });
}

// Initial load
localizePage(currentLang);

// Language switcher
document.getElementById('langSwitcher').addEventListener('change', e => {
  currentLang = e.target.value;
  localizePage(currentLang);
});
