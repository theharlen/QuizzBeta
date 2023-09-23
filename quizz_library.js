// Referencie os elementos HTML
const perguntaElement = document.getElementById('pergunta');
const respostaInput = document.getElementById('resposta');
const verificarButton = document.getElementById('verificar');
const resultadoElement = document.getElementById('resultado');

// Defina a resposta correta
const respostaCorreta = 'Pavão';

// Adicione um ouvinte de evento para o botão de verificação
verificarButton.addEventListener('click', function() {
    const respostaUsuario = respostaInput.value;

    // Verifique se a resposta do usuário é igual à resposta correta
    if (respostaUsuario.toLowerCase() === respostaCorreta.toLowerCase()) {

        resultadoElement.textContent = 'Resposta correta!';
        resultadoElement.style.color = 'green';

    // Exibir a mídia correta
    
 // Esconda outros elementos, como a pergunta e o botão de verificação
    //perguntaElement.style.display = 'none';
    respostaInput.style.display = 'none';
    verificarButton.style.display = 'none';

    // Exiba o vídeo
    const videoCorreto = document.getElementById('videoCorreto');
    videoCorreto.style.display = 'block';
    videoCorreto.play(); // Iniciar a reprodução do vídeo automaticamente

    const imagemCorreta = document.getElementById('imagemCorreta');
    imagemCorreta.style.display = 'block';
    imagemCorreta.display();

    } else {
        resultadoElement.textContent = 'Resposta incorreta. Tente novamente.';
        resultadoElement.style.color = 'red';
    }
});