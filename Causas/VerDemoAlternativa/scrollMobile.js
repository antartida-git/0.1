window.addEventListener("DOMContentLoaded", function() {
    const assuntos = document.querySelectorAll(".assunto");

    if (assuntos.length > 0) {
        assuntos.forEach((assunto) => {
            let touchStartX = 0;
            let touchStartY = 0;
            let touchEndX = 0;
            let touchEndY = 0;

            assunto.addEventListener("touchstart", function(event) {
                touchStartX = event.changedTouches[0].screenX;
                touchStartY = event.changedTouches[0].screenY;
            });

            assunto.addEventListener("touchend", function(event) {
                touchEndX = event.changedTouches[0].screenX;
                touchEndY = event.changedTouches[0].screenY;
                handleSwipe(touchStartX, touchStartY, touchEndX, touchEndY);
            });

            function handleSwipe(startX, startY, endX, endY) {
                const diffX = startX - endX;
                const diffY = startY - endY;

                // Verifica se foi um swipe horizontal (deslizar para esquerda ou direita)
                if (Math.abs(diffX) > Math.abs(diffY)) {
                    if (diffX > 50) {
                        console.log("Swipe pra esquerda")
                    } else if (diffX < -50) {
                        // Swipe para a direita
                        console.log("Swipe para a direita");
                    }
                } else {
                    // Verifica se foi um swipe vertical (deslizar para cima ou para baixo)
                    if (diffY > 50) {
                        // Swipe para cima
                        console.log("Swipe para cima");
                    } else if (diffY < -50) {
                        // Swipe para baixo
                        console.log("Swipe para baixo");
                    }
                }
            }
        });
    } else {
        console.log("Nenhum elemento com a classe 'assunto' foi encontrado.");
    }
});