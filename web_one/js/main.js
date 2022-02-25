//menu
const menu = document.querySelector(".navbar_links")
const menuButton = document.querySelector(".navbar_icons")
const overlay = document.querySelector("#overlay")

menuButton.addEventListener('click', ()=>{
    //toggle: chuyển đổi
    menu.classList.toggle('navbar_open');
    menuButton.classList.toggle('open');
    overlay.classList.toggle('show');
})
// overlay khi bấm vào khoảng trống bên ngoài sẽ đóng đc menu
overlay.addEventListener('click',()=>{
    menu.classList.toggle('navbar_open');
    menuButton.classList.toggle('open');
    overlay.classList.toggle('show');
})