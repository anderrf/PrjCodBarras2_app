// This is a JavaScript file

$(document).on("click", "#btnCadastro", function(){
  $(location).attr("href", "cadastro.html");
});

function mudarParaCadastro(){
  document.getElementById("imgIndex").src = "img/cdbarras.gif";
  window.setTimeout('location.href = "cadastro.html"', 2000);
}

$(document).on("click", "#btnPesquisa", function(){
  $(location).attr("href", "pesquisar.html");
});

$(document).on("click", "#btnVoltar", function(){
  $(location).attr("href", "index.html");
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
    url: "https://bdscanweb-luizgustavo417.c9users.io/webservice/cadastrar.php", //Para onde enviar
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

$(document).on("click","btnPesquisar", function(){
   $.ajax({
        type:"post", //como enviar
        url:"https://crur3i2-jussimar.c9users.io/listar.php",//para onde enviar
        dataType:"json",
        //se der certo
        success: function(data){
            var itemlista = "";
            $.each(data.pessoas,function(i,dados){
              itemlista += "<option value='"+dados.codigo+"'>"+dados.nome+"</option>"; 
            });
        $("#lista").html(itemlista);
        },
        //se der errado
        error: function(data){
             navigator.notification.alert(data);
        }
    });    
}
});

});