document.getElementById('voltarBtn').addEventListener('click', function() {
    // Você pode personalizar esta URL com o endereço da sua página inicial
    window.location.href = 'index.html';
});


let fundoAtual = 1;

document.getElementById('trocarFundoBtn').addEventListener('click', function() {
    const body = document.body;

    // Troca entre os fundos
    fundoAtual = (fundoAtual === 1) ? 2 : 1;

    // Adapte o ID dos fundos conforme definido em seu arquivo CSS
    body.setAttribute('id', `fundo${fundoAtual}`);
});
