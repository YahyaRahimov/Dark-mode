// const elChangeLogoTextButton = document.querySelector('.change-logo-text-button')

// const elHeaderLink = document.querySelector('.header-link')

// elChangeLogoTextButton.addEventListener('click', function() {
//   elHeaderLink.textContent = 'Boshqa Matn';
// })

document.body.classList.remove('dark-mode');

const elLightModeButton = document.querySelector('.site-header-light');
const elDarkModeButton = document.querySelector('.site-header-dark');

elLightModeButton.addEventListener('click', function () {
  document.body.classList.remove('dark-mode')
});

elDarkModeButton.addEventListener('click', function() {
  document.body.classList.add('dark-mode')
});