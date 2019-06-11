// This is a JavaScript file

$(document).on("click", "#btnCadastro", function(){
  $(location).attr("href", "cadastro.html");
});

function mudarParaCadastro(){
  document.getElementById("imgIndex").src = "img/cdbarras.gif";
  window.setTimeout('location.href = "cadastro.html"', 2000);
}

$(document).on("click", "#btnVoltar", function(){
  $(location).attr("href", "index.html");
});

$(document).on("click", "#btnPesquisa", function(){
  $(location).attr("href", "pesquisar.html");
});

$(document).on("click","#btnSalvar", function(){

  var parametros = {
    "nome": $("#nome").val(),
    "cod": $("#cod").val(),
    "valor": $("#valor").val(),
    "descricao": $("#descricao").val(),
    "processador": $("#processador").val(),
    "sistemaop": $("#sistemaop").val(),
    "tamtela": $("#tamtela").val(),
    "tecwifi": $("#tecwifi").val(),
    "qtcam": $("#qtcam").val(),
    "rescam": $("#rescam").val(),
    "memflash": $("#memflash").val()
  }

  $.ajax({
    type: "post", //Como enviar
    url: "https://prjcodbarras-andersonrf.c9users.io/webservice/cadastrar.php", //Para onde enviar
    data: parametros, //O que enviar
    //Se der certo
    success: function (data){
      navigator.notification.alert("Certo:"+data);
      $("#nome").val("");
      $("#cod").val("");
      $("#valor").val("");
      $("#descricao").val("");
      $("#processador").val("");
      $("#sistemaop").val("");
      $("#tamtela").val("");
      $("#tecwifi").val("");
      $("#qtcam").val("");
      $("#rescam").val("");
      $("#memflash").val("");

    },
    //Se der errado
    error: function(data){
      navigator.notification.alert(data);
    }
  });


});