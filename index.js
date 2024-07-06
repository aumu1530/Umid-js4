let img1 = "https://i.insider.com/64a43ffd4cc8540019cb5d98?width=750&format=jpeg&auto=webp"
let img2 = "https://hips.hearstapps.com/hmg-prod/images/2024-tesla-model-s-107-6572200e43fa1.jpg?crop=0.497xw:0.560xh;0.243xw,0.232xh&resize=768:*"
let img3 = "https://imageio.forbes.com/specials-images/imageserve/652a5ac04ae0d1090fb2dc74/tesla-model-3-highland-front/960x0.jpg?format=jpg&width=960"

let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let image = document.getElementById("image")

btn2.onclick = function () {
    image.src = img2;
};

btn1.onclick = function () {
    image.src = img1;
};

btn3.onclick = function () {
    image.src = img3;
};

let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")
let btn6 = document.getElementById("btn6")

btn4.onclick = function () {
    image.style.filter = "opacity(25%)"
}

btn5.onclick = function () {
    image.style.filter = "blur(5px)"
}

btn6.onclick = function () {
    image.style.filter = "contrast(200%)"
}



let btn7 = document.getElementById("btn7")
let btn8 = document.getElementById("btn8")
let btn9 = document.getElementById("btn9")

btn7.onclick = function () {
    image.style.border = "1rem solid"
}

btn8.onclick = function () {
    image.style.border = "thick double #32a1ce"
}

btn9.onclick = function () {
    image.style.border = "dashed red"
}








