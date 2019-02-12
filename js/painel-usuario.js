
$(document).ready(function(){

  $('#btnAlt').click(function(event){
    event.preventDefault();
    $.get("alterarinfo.php", function(data){
    $("#conteudo").html(data);
  })
  });

  $('#bntEnviarObjeto').click(function(event){
  event.preventDefault();
  $.get("enviarObjeto.php", function(data){
  $("#conteudo").html(data);
});
});


  $('#bntEnviarProj').click(function(event){
  event.preventDefault();
  $.get("enviarproj.php", function(data){
  $("#conteudo").html(data);
});
});

$('#btnEditarProj').click(function(event){
    event.preventDefault();
    $.get("editarproj.php", function(data){
    $("#conteudo").html(data);
  });
});


  $('#btncads').click(function(event){
    event.preventDefault();
    $.get("alterarsenha.php", function(data){
    $("#conteudo").html(data);
  })
  });




  $('#btncad').click(function(){
    $(this).hide();
    $('#btncads').hide();
    $('#btnsalvar').show();
    $('#first_name').removeAttr("disabled");
    $('#last_name').removeAttr("disabled");
    $('#email').removeAttr("disabled");
  });




  $('#alterar').submit(function(){
    var dados = $(this).serialize();
    $.ajax({
      url: "altera.php",
      type: "post",
      data: dados,
      beforeSend: function(){ $('#preloader').css('display','inline'); $('#btnsalvar').addClass('disabled');} //bagulho de carregamento
    })
    .done(function(data){
      $('#preloader').hide();
      $('#btnsalvar').removeClass('disabled');
      $('#btnsalvar').hide();
      $('#first_name').attr("disabled", true);
      $('#last_name').attr("disabled", true);
      $('#email').attr("disabled", true);
      $('#btncad').show();
      $('#btncads').show();
      alert('Dados alterados com sucesso!');
    })
    .fail(function(){
      alert('ok');
    });
    return false;
  });






  $('#alterarSenha').submit(function(){
    var dados = $(this).serialize();
    $('#erroSenhaC').html("");
    $('#erroSenhaI').html("");
    $.ajax({
      url: "altera.php",
      type: "post",
      data: dados,
      beforeSend: function(){$('#preloader').css('display','inline'); $('#alteraSenha').addClass('disabled'); } //bagulho de carregamento
    })
    .done(function(data){
      $('#preloader').hide();
      $('#alteraSenha').removeClass('disabled');
      if(data.indexOf("incorreta") >= 0){
        $('#erroSenhaI').html(data);
      }else if(data.indexOf("coincidem") >= 0){
        $('#erroSenhaC').html(data);
      }else if(data.indexOf("certo") >= 0){
        alert("Senha alterada com sucesso! \n Faço o login novamente!");
        window.location.href = "login.php";
      }else{
        alert("erro");
      }
    })
    .fail(function(){
      alert('ok');
    });
    return false;
  });







});
