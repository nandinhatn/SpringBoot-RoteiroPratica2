/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
console.log('novo controle');
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


