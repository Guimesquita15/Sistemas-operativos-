// Adicione este trecho ao seu script.js
document.getElementById('trocarFundoBtn').addEventListener('click', function() {
    // Obtém uma referência ao corpo da página
    const body = document.body;

    // Troca entre os fundos
    if (body.classList.contains('fundo1')) {
        body.classList.remove('fundo1');
        body.classList.add('fundo2');
    } else {
        body.classList.remove('fundo2');
        body.classList.add('fundo1');
    }
});
