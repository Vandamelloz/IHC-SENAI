function validarCadastro() {

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    console.log("Valores lidos:", { nome, email, senha });

    if (nome.trim() === '' || email.trim() === '' || senha.trim() === '') {
        console.log("Redirecionando para erro...");
        window.location.href = 'homeout.html';
    } else {
        console.log("Redirecionando para sucesso...");
        window.location.href = 'home.html';
    }
}