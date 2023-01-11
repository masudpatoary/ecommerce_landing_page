const menuIcon = document.getElementById('menu_icon')
const menuOpenIcon = document.getElementById('menu_open_icon')
const menuCloseIcon = document.getElementById('menu_close_icon')
const menuItems = document.getElementById('menu_items')
const navItem = document.getElementsByClassName('nav_item')
const productContainer = document.getElementById('product_container')
let navMenuHidden

const allProduct = [
    {
        id: 'zfxcv',
        productTitle: 'Headphone',
        price: 120,
        img: './resources/images/product/product_1.png',
        bgUrl: './resources/images/product/product_bg_1.svg'
    },
    {
        id: 'njxfb',
        productTitle: 'Headphone',
        price: 120,
        img: './resources/images/product/product_2.png',
        bgUrl: './resources/images/product/product_bg_2.svg'
    },
    {
        id: 'dfzvxvv',
        productTitle: 'Headphone',
        price: 120,
        img: './resources/images/product/product_3.png',
        bgUrl: './resources/images/product/product_bg_3.svg'
    },
    {
        id: 'xvxcvv',
        productTitle: 'Headphone',
        price: 120,
        img: './resources/images/product/product_4.png',
        bgUrl: './resources/images/product/product_bg_4.svg'
    }
]

function activeAnimation() {
    const sectionEl = document.querySelectorAll(".scroll_down_anm");

    for (let i = 0; i < sectionEl.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = sectionEl[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            sectionEl[i].classList.add("active");
            
        } else {
            sectionEl[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", activeAnimation);


menuIcon.addEventListener('click', () => {
    renderMobileMenu()
})
menuItems.addEventListener('click', () => {
    renderMobileMenu()

})

const renderMobileMenu = () => {
    navMenuHidden = !navMenuHidden
    if (!navMenuHidden) {
        menuItems.classList.remove('nav_active')
        menuItems.classList.add('nav_inactive')
        menuOpenIcon.setAttribute('src', './resources/images/icons/menu_open_icon.svg')

    }
    if (navMenuHidden) {
        menuItems.classList.remove('nav_inactive')
        menuItems.classList.add('nav_active')
        menuOpenIcon.setAttribute('src', './resources/images/icons/menu_close_icon.svg')
    }
}




const createProductDiv = () => {
    for (let i = 0; i < allProduct.length; i++) {
        let productDiv = document.createElement('div'); productDiv.classList.add('new_product_single');
        productDiv.style.backgroundImage = `url(${allProduct[i]?.bgUrl})`
        // console.log(i)
        productDiv.innerHTML = `
            <img width="180px" src=${allProduct[i].img} alt="">
            <h3>${allProduct[i].productTitle}</h3>
            <p>$ ${allProduct[i].price}</p>
            <button class="buy_btn"><a href="">Buy Now</a></button>
        `
        // console.log(productDiv)
        productContainer.appendChild(productDiv)
    }
}
createProductDiv()
