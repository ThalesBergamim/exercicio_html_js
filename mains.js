    document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const mensagemSucesso = `Sucesso! Valor do campo B é de ${campoB} , maior que o valor do campo A.`
    const mensagemError = `Erro! Valor do campo A é de ${campoA}, maior que o valor do campo B.`

    if (campoB > campoA) {
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso; 
        containerMensagemSucesso.style.display = 'block'; 

        campoA.value = '';
        campoB.value = '';

    } else {
        const containerMensagemSucesso = document.querySelector('.error-message');
        containerMensagemSucesso.innerHTML = mensagemError; 
        containerMensagemSucesso.style.display = 'block'; 

    }
});
