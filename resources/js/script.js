const menuIcon = document.getElementById('menu_icon')
const menuOpenIcon = document.getElementById('menu_open_icon')
const menuCloseIcon = document.getElementById('menu_close_icon')
const menuItems = document.getElementById('menu_items')
const navItem = document.getElementsByClassName ('nav_item')
let navMenuHidden

const menuItem = [
    'Home', 'Collections', 'About Us', 'Login', '<img width="30px" src="./resources/images/shopping_cart.svg" alt="">'
]

menuIcon.addEventListener('click', ()=>{
    renderMobileMenu()
})
menuItems.addEventListener('click', ()=>{
    renderMobileMenu()
    
})

const renderMobileMenu =()=>{
    navMenuHidden = !navMenuHidden

    
    if(!navMenuHidden){
        menuItems.classList.remove('nav_active')
        menuItems.classList.add('nav_inactive')
        menuOpenIcon.setAttribute('src', './resources/images/menu_open_icon.svg')

    }
    if(navMenuHidden){
        menuItems.classList.remove('nav_inactive')
        menuItems.classList.add('nav_active')
        menuOpenIcon.setAttribute('src', './resources/images/menu_close_icon.svg')
    }
}

