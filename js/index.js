document.addEventListener('DOMContentLoaded', _ => {
    const btn_menu = document.querySelector('.navbar__btn-toggle');
    const background = document.querySelector('.navbar__background');
    const navbar = document.querySelector('.navbar');

    btn_menu.addEventListener('click', _ => {
        navbar.classList.add('navbar__sidebar--open')
        console.log('a')
    })
    background.addEventListener('click', _ => {    
        navbar.classList.remove('navbar__sidebar--open')
        console.log('a')
    });
});
