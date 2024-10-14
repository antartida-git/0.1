let z = 1;
let ultimoVisivelIndexDesk = z - 1; // Inicializado com base no valor inicial de z
const scrollableDiv = document.getElementById('scrollableDiv');


function atualizarScroll() {
    scroll.innerHTML = `
      <ion-icon name="chevron-up-outline"></ion-icon>
      <div class="top">${z}</div>	      
      <div class="line"></div>
      <div class="boxLine"></div>
      <div class="bottom">6</div> 
      <ion-icon name="chevron-down-outline"></ion-icon>
    `;
  }

  // Atualiza o conteúdo inicial na página
  atualizarScroll();

  // Evento de rotação da roda do mouse (scroll no mouse wheel)
  scrollableDiv.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
      // Rolagem para baixo
      z = Math.min(z + 1, 6); // Incrementa o valor até no máximo 6
    } else {
      // Rolagem para cima
      z = Math.max(z - 1, 1); // Decrementa o valor até no mínimo 1
    }

    // Atualiza a visibilidade dos testes
    for (let i = 0; i < testes.length; i++) {
      testes[i].classList.remove('visivel');
      controles[i].classList.remove('ativo');
    }

    // Mostra o elemento correspondente e atualiza o conteúdo
    testes[z - 1].classList.add('visivel');
    controles[z - 1].classList.add('ativo');

    // Atualiza o conteúdo do scroll
    atualizarScroll();
  });