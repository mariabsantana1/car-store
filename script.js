let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')
let list = container.querySelector('.list')

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1

function setSlider(){
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicator.querySelector('.number').innerHTML = '0' + (active + 1)
}


nextButton.onclick = () => {
    list.style.setProperty('--calculation', 1)
    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
    items[active].classList.add('active')
}



prevButton.onclick = () => {
    list.style.setProperty('--calculation', -1)
    active = active - 1 < firstPosition ? lastPosition : active - 1
    setSlider()
    items[active].classList.add('active')
}


const header = document.querySelector("header")
const nav = header.querySelector("nav ul")
const menuBtn = document.createElement("button")
menuBtn.classList.add("menu-btn")
menuBtn.innerHTML = "☰"
header.insertBefore(menuBtn, nav)

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open")
    menuBtn.classList.toggle("active")
})

nav.querySelectorAll("li").forEach(li => {
    li.addEventListener("click", () => {
        nav.classList.remove("open")
        menuBtn.classList.remove("active")
    })
})