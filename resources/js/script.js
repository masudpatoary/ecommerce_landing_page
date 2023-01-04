const menuIcon = document.getElementById('menu_icon')
const menuOpenIcon = document.getElementById('menu_open_icon')
const menuCloseIcon = document.getElementById('menu_close_icon')
const menuItems = document.getElementById('menu_items')
const navItem = document.getElementsByClassName ('nav_item')
let navMenuHidden

menuIcon.addEventListener('click', ()=>{
    renderMobileMenu()

})
menuItems.addEventListener('click', ()=>{
    renderMobileMenu()
    console.log('click')
})

const renderMobileMenu =()=>{
    navMenuHidden = !navMenuHidden
    console.log(navMenuHidden)
    
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

