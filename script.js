document.getElementById('voltarBtn').addEventListener('click', function() {
    // Personalize esta URL com o endereço da sua página inicial
    window.location.href = 'index.html';
});

let fundoAtual = 1;

document.getElementById('trocarFundoBtn').addEventListener('click', function() {
    const body = document.body;

    // Troca entre os fundos
    fundoAtual = (fundoAtual === 1) ? 2 : 1;

    // Atualiza o ID do corpo para alternar entre os estilos de fundo
    body.setAttribute('id', `fundo${fundoAtual}`);
});




