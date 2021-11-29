/*var 
 var escopo global (determinado local, com perímetro demarcado)*/

/*let 
let escopo local. Evita conflito de escopo*/

/*const
 escopo local com variável constante não muda ao decorrer. Pouco usado*/

 /*acesso 
 por Tag: getElementByTagName()
 por Id: getElementByID()
 por Nome: getElementsByname()
 por Classe: getElementsByClassName()
 por Seletor: querySelector()
 */

 let nome = window.document.getElementById("nome")
 let email = document.querySelector("#email")
 let assunto = document.querySelector("#assunto")
 let nomeOk = false
 let emailOk = false
 let assuntoOk = false
 let mapa = document.querySelector("#mapa")

 nome.style.width = "100%"
 email.style.width = "100%"

 function validaNome() {

    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        /*alert("Nome Inválido")*/
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = "#FF3B78"
    }
    else {
        txt.innerHTML = "Nome válido"
        txt.style.color = "#85E9EB"
        nomeOk = true
    }
 }

function validaEmail() {

        let txtEmail = document.querySelector("#txtEmail")
        if (email.value.indexOf("@") == -1 || email.value.indexOf("." == -1)) {
            txtEmail.innerHTML = "E-mail Inválido"
            txtEmail.style.color = "#FF3B78"
            fon
        }
        else {
            txtEmail.innerHTML = "E-mail Válido"
            txtEmail.style.color = "#85E9EB"
            emailOk = true
        }
    }


 function validaAssunto() {

        let txtAssunto = document.querySelector("#txtAssunto")
        if (assunto.value.length >= 100) {
            txtAssunto.innerHTML = "Texto muito grande. Digite no máximo 100 caracteres "
            txtAssunto.style.color = "#FF3B78"
            txtAssunto.style.display = "block"
        }
        else {
            txtAssunto.style.display = "none"
            assuntoOk = true
        }
    }

    function enviar() {
        if(nomeOk == true && emailOk == true && assunto == true){
            alert("Formulário enviado com sucesso!")
        }
        else {
            alert("Preencha o formulário corretamente antes de enviar.")
        }
    }

    function mapaZoom() {
        mapa.style.width = "800px"
        mapa.style.height = "230px"

    }

    function mapaNormal(){
        mapa.style.width = "400px"
        mapa.style.height = "230px"
    }