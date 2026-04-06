async function loadLanguage(lang) {
  const response = await fetch(`${lang}.json`);
  const data = await response.json();

  document.getElementById("hero_title").textContent = data.hero_title;
  document.getElementById("hero_subtitle").textContent = data.hero_subtitle;
  document.getElementById("about_title").textContent = data.about_title;
  document.getElementById("about_text").textContent = data.about_text;
  document.getElementById("cta_button").textContent = data.cta_button;
  document.getElementById("footer_text").textContent = data.footer_text;
}

// default language
loadLanguage("en");