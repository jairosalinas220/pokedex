const btn_menu = document.querySelector('.btn-menu');

btn_menu.addEventListener('click', _ => {
    const hero_links = document.querySelector('.hero_links')
    hero_links.classList.toggle('open')
})