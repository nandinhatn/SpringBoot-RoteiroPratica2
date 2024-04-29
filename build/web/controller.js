/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

let cepInput = document.getElementById("cep");
let cep = cepInput.value;
console.log(cep);
let inputRua = document.getElementById("rua");
let bairro = document.getElementById("bairro");
let cidade = document.getElementById("cidade");
let estado = document.getElementById("estado");

let results = document.getElementsByClassName("results");







async function getCEP(valor) {
    
    
       
        const response = await fetch(`http://viacep.com.br/ws/${valor}/json/`);
  const dados = await response.json();
  console.log(dados);
  
  if(dados){
      inputRua.value = dados.logradouro;
      bairro.value = dados.bairro;
      cidade.value = dados.localidade;
      estado.value= dados.uf;
  }
  else{
      inputRua.value =" ";
      bairro.value = " ";
      cidade.value = " ";
      estado.value= " ";
  }
   
  
}


document.getElementById("cep").addEventListener("input", function (e){
    console.log(e.target.value);
    let cep = e.target.value;
    console.log(cep.length);
    
    
    var cepFormat = cep.replace(/[^0-9]/g,'');
    console.log(parseInt(cepFormat));
    if (cepFormat.length===8){
      console.log('entrou aqui');
      getCEP(cepFormat);
    }
    
    
    
});

let formulario = document.getElementById('form');
console.log(formulario);

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    e.stopPropagation();
    console.log(e);
    const msgErro = document.getElementById("msgErro");
    msgErro.innerHTML = ``;
    
   console.log(e.target[0]);
   let nome = e.target[0];
   let sobrenome = e.target[1];
   let email = e.target[2];
   let senha= e.target[3];
   let cep = e.target[4];
   let numero = e.target[9];
   
  
    validForm(nome, 3);
    validForm(email,10);
    validForm(sobrenome,3);
    validForm(senha,7);
    validForm(numero,1);
    validForm(cep,8);
    
    
});



const validForm = (target, caracteres)=>{
    const button = document.getElementById("button");
  
    const msgErro = document.getElementById("msgErro");
    const msgSucesso= document.getElementById("msgSucesso");
    if(target.value.length<caracteres){
        target.classList.add('invalid');
      
        msgErro.innerHTML += `<strong>${target.name}</strong> é um campo obrigatório <br>`;
        msgErro.style.display = 'block';
    }
    else if(target.type==='email' && !target.checkValidity()){
          target.classList.add('invalid');
          
          msgErro.innerHTML += `<strong>${target.name}</strong> é um campo obrigatório <br>`;
          msgErro.style.display = 'block';
    }
    else{
        target.classList.add('valid');
        target.classList.remove('invalid');
        
        msgErro.innerHTML = ``;
        msgErro.style.display = 'none';
        msgSucesso.style.display='block';
    }
    
    
};