function mudarCorTexto(){
    document.querySelector("#p1").style.color= "green"

}

function mudarCorFundo(){
    document.querySelector("#p1").style.background="green"
}
   

function alterarTexto(){
    textoForm = document.querySelector("#textinput"). value

    document.querySelector("#texto2").innerHTML = textoForm
}
