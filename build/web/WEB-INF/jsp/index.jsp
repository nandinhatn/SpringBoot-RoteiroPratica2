<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Formulário de Cadastro</title>
       <link rel="preconnect" href="https://fonts.googleapis.com">
    
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <link rel="stylesheet" href="styles.css"/>
    </head>
  
    <body >
     <div class="container " id="container">
         <form id="form" action="#" class="shadow-lg p-3 mb-5 bg-body-tertiary rounded form-control-sm text-sm textos">
        <h1 class="text-sm">Formulário de Cadastro</h1>
        <div class="row">
            <div class="col-md-6 mb-3 text-sm">
                <div class="input-group">
                    <span class="input-group-text textos" >Nome</span>
                    <input  type="text"  id="nome" name="Nome"  class="form-control form-control-sm small-input " aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm">
                </div>
            </div>
            <div class="col-md-6 mb-3">
                <div class="input-group">
                    <span class="input-group-text text-sm textos" >Sobrenome</span>
                    <input  type="text" id="sobrenome" name="Sobrenome" class="form-control form-control-sm" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm">
                </div>
            </div>
            <div class="col-md-6 mb-3">
                <div class="input-group">
                    <span class="input-group-text text-sm textos" >Email</span>
                    <input type="email"  id="email" name="Email"  class="form-control form-control-sm" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm">
                </div>
            </div>

            <div class="col-md-6 mb-3">
                <div class="input-group">
                    <span class="input-group-text text-sm textos" >Senha</span>
                    <input type="password"  name="Senha"  id="senha" class="form-control form-control-sm" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm">
                </div>
            </div>
            <h3> Endereço </h3>
           
            <div class="col-md-4 mb-3">
                <div class="input-group">
                    <span class="input-group-text text-sm textos" >CEP</span>
                    <input type="text" id="cep" name="CEP" value=""   class="form-control form-control-sm " aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm">
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="input-group">
                    <span class="input-group-text text-sm textos" >Rua</span>
                    <input type="text" id="rua" readonly   class="form-control form-control-sm results" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm">
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="input-group">
                    <span class="input-group-text text-sm textos results" >Bairro</span>
                    <input type="text" id="bairro"  readonly  class="form-control form-control-sm" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm">
                </div>
            </div>

            <div class="col-md-4 mb-3">
                <div class="input-group">
                    <span class="input-group-text text-sm textos results" >Cidade</span>
                    <input type="text" id="cidade" readonly   class="form-control form-control- small-input" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm">
                </div>
            </div>
            <div class="col-md-2 mb-3">
                <div class="input-group">
                    <span class="input-group-text text-sm textos results" >UF</span>
                    <input type="text" id="estado" readonly class="form-control form-control-sm" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm">
                </div>
            </div>
               <div class="col-md-3 mb-3">
                <div class="input-group">
                    <span class="input-group-text text-sm textos  results" >Número</span>
                    <input type="text" id="numero" name="Número"  class="form-control form-control-sm" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm">
                </div>
            </div>
            <div class="col-md-3 mb-3">
                <div class="input-group">
                    <span class="input-group-text text-sm textos results" >Comp</span>
                    <input type="text" id="complemento" class="form-control form-control-sm" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm">
                </div>
            </div>

        </div>
        <button type="submit"  id="button" class="btn btn-dark">Verificar</button>
      <div id="msgErro" class="alert alert-danger alert-dismissible fade show " role="alert">
          <strong>Erro!</strong> <br>
  <button type="button" disabled class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
        <div id="msgSucesso" class="alert alert-success" role="alert">

</div>
    </form>
</div>
    </body>
    <script src="controller1.js"></script>
    <script src="validacao.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</html>
