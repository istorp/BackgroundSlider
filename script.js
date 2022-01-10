const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeslide = 0

rightBtn.addEventListener('click', () => {
    activeslide++

    if(activeslide > slides.length -1){
        activeslide =0
    }

    setBgBody()
    setActiveSlede()
})

leftBtn.addEventListener('click', () => {
    activeslide--

    if(activeslide < 0){
        activeslide = slides.length -1
    }

    setBgBody()
    setActiveSlede()
})

setBgBody()

function setBgBody(){
    body.style.backgroundImage = slides[activeslide].style.backgroundImage
}

function setActiveSlede(){
    slides.forEach(slide => {
        slide.classList.remove('active')
    })

    slides[activeslide].classList.add('active')
}