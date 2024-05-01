/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

document.getElementById("cep").addEventListener("input", function (e) {
    console.log(e.target.value);
    let cep = e.target.value;
    console.log(cep.length);

    var cepFormat = cep.replace(/[^0-9]/g,'');
    console.log(parseInt(cepFormat));
    if (cepFormat.length === 8) {
        console.log('entrou aqui');
        getCEP(cepFormat);
    }
});

let formulario = document.getElementById('form');
console.log(formulario);

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e);
    const msgErro = document.getElementById("msgErro");
    const msgSucesso = document.getElementById("msgSucesso");
    msgErro.innerHTML = ``;

    console.log(e.target[0]);
    let nome = e.target[0];
    let sobrenome = e.target[1];
    let email = e.target[2];
    let senha = e.target[3];
    let cep = e.target[4];
    let numero = e.target[9];

    let formNome = validForm(nome, 3);
    let formEmail = validForm(email, 10);
    let formSobrenome = validForm(sobrenome, 3);
    let formSenha = validForm(senha, 7);
    let formNumero = validForm(numero, 1);
    let formCep = validForm(cep, 8);

    if (formNome && formEmail && formSobrenome && formSenha && formNumero && formCep) {
        console.log('todos campos válidos1');
        msgErro.style.display = 'none';
        msgSucesso.style.display = 'block';
        msgSucesso.innserHTML = "Dados Corretos";
    } else {
        console.log('Há campos que precisam ser preenchidos!!!!');
        msgErro.innerHTML += `´Há campos obrigatórios que precisam ser preenchidos <br>`;
        msgErro.style.display = 'block';
        msgSucesso.style.display = 'none';
    }
    return;
});

const exibMsgs = (name, form) => {
    if (form) {
        
    }
};

const validForm = (target, caracteres) => {
    const button = document.getElementById("button");

    if (target.value.length < caracteres) {
        target.classList.add('invalid');
        return false;
    } else if (target.type === 'email' && !target.checkValidity()) {
        return false;
    } else {
        target.classList.add('valid');
        target.classList.remove('invalid');
        return true;
    }
};    