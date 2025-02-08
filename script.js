const img = document.getElementById("butilka")
const anim = document.getAnimations('waterdrop')[0]
const firstdiv = document.getElementById('firststep')
const seconddiv = document.getElementById('secondstep')
img.addEventListener("click", () => {
    img.style.animationName = "waterdrop"
})

img.addEventListener("animationend", () => {
    firstdiv.style.display = "none"
    
    seconddiv.style.display = "block"
})