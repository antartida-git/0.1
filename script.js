/*
//Nota: Usar querySelector ao invés de queryselectorAll quando for 1 carrossel só
const carrossel = document.querySelectorAll(".carrossel1, .carrossel2");

//define variaveis que vamos usar mais tarde
let isDragStart = false, prevPageX, prevScrollLeft;

//Muda isDragStart para True quando mouse é acionado"Click"
const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carrossel.scrollLeft;
}

const dragStop = () => {
    isDragStart = false
}

const dragging = (e) => {
    //Enquanto isDragStart parmanecer falso 
    if(!isDragStart) return;
    //Isso não o scroll não acontece
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX
    carrossel.scrollLeft = prevScrollLeft - positionDiff;
    console.log(e.pageX)
}

caso for usar esse colocar forEach{}
carrossel.addEventListener("mousedown", dragStart)
carrossel.addEventListener("mousemove", dragging)
carrossel.addEventListener("mouseup", dragStop)
carrossel.addEventListener("mouseleave", dragStop)
*/

document.querySelectorAll(".carrossel1, .carrossel2").forEach(carrossel => {
    let isDragging = false, startX, scrollLeft;

    carrossel.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.pageX - carrossel.offsetLeft;
        scrollLeft = carrossel.scrollLeft;
    });

    carrossel.addEventListener("mouseleave", () => isDragging = false);
    carrossel.addEventListener("mouseup", () => isDragging = false);

    carrossel.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carrossel.offsetLeft;
        const walk = (x - startX) * 1.5; // velocidade de arraste (1 é o padrão)
        carrossel.scrollLeft = scrollLeft - walk;
    });
});