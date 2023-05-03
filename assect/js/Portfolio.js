const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const menu = $('.navbar__links')
const menuBtn = $('.navbar__icons')
const overlay = $('#overlay')

menuBtn.addEventListener('click', ()=>{
    menu.classList.toggle('navbar__open');
    menuBtn.classList.toggle('open');
    overlay.classList.toggle('show');

})

overlay.addEventListener('click', ()=>{
    menu.classList.toggle('navbar__open');
    menuBtn.classList.toggle('open');
    overlay.classList.toggle('show');
})

