const controles = document.getElementsByClassName("controle");
const testes = document.getElementsByClassName("teste");

// Variável para armazenar o último índice visível
let ultimoVisivelIndex = 0;

// Inicializa o primeiro elemento como visível
testes[ultimoVisivelIndex].classList.add('visivel');
controles[ultimoVisivelIndex].classList.add('ativo');

for (let i = 0; i < controles.length; i++) {
    controles[i].addEventListener("mouseenter", function() {
        // Esconde todos os elementos de teste
        for (let j = 0; j < testes.length; j++) {
            testes[j].classList.remove('visivel');
            controles[j].classList.remove('ativo')
        }
        // Mostra o elemento correspondente
        testes[i].classList.add('visivel');
        controles[i].classList.add('ativo')
        
        // Atualiza o índice do último elemento visível
        ultimoVisivelIndex = i;
    });
}

// Adiciona evento de mouseleave ao último controle
controles[controles.length - 1].addEventListener("mouseleave", function() {
    // Mantém o último elemento visível
    testes[ultimoVisivelIndex].classList.add('visivel');
    controles[ultimoVisivelIndex].classList.add('ativo')
});