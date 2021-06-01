let accordion = document.querySelectorAll('.accordion')
let accordionBtn = document.querySelectorAll('.accordion-btn')
let menu = document.querySelectorAll('.menu')
let btn = document.querySelectorAll('.btn')
let overlay = document.querySelectorAll('.overlay')

function clickedAccordion(clicked) {
    accordion.forEach(item => {
        console.log(item)
        if (item.dataset.itemOrder == clicked.dataset.itemOrder) {
            item.classList.toggle('show')
        }
    })
}

accordionBtn.forEach(item => {
    item.addEventListener('click', function () {
        clickedAccordion(item)
    })
})

// btn.addEventListener('click', function(){
//     menu.classList.toggle('show')
//     overlay.classList.toggle('show')
// })


function clicked(clicked) {
    overlay.forEach(item => {
        if (item.dataset.itemOrder == clicked.dataset.itemOrder) {
            item.classList.toggle('show')
        }
    })
    menu.forEach(item => {
        if (item.dataset.itemOrder == clicked.dataset.itemOrder) {
            item.classList.toggle('show')
        }
    })
    btn.forEach(item => {
        if (item.dataset.itemOrder == clicked.dataset.itemOrder) {
            item.classList.toggle('show')
        }
    })
}

btn.forEach(item => {
    item.addEventListener('click', function () {
        clicked(item)
    })
})








