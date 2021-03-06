<?php session_start(); ?>
<!DOCTYPE html>
<html>
<head>

	<title>Email - Eridanus</title>

	<?php

		include "cabecalho.php";

	?>

</head>
<body>

<?php

	include "menu.php";

?>

<?php

	$nome = htmlspecialchars($_POST['nome']);
	$email = htmlspecialchars($_POST['email']);
	$assunto = htmlspecialchars($_POST['assunto']);
	$mensagem = htmlspecialchars($_POST['mensagem']);
	$verificador = 0;

	if (isset($_POST['btn-enviar'])){

		if(preg_match('([A-Za-z])', $nome)){
			$verificador++;
		} else{
			echo "<p class='erro-email'>Nome inválido!</p>";
		}

		if(preg_match('([A-Za-z0-9])', $assunto)){
			$verificador++;
		}else{
			echo "<p class='erro-email'>Assunto inválido!</p>";
		}

		if(preg_match('^[_.a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$^', $email)){
			$verificador++;
		} else{
			echo "<p class='erro-email'>E-mail inválido!</p>";
		}

		if ($verificador == 3){
			mail("calistosoftwares@gmail.com", "Assunto: ".$assunto.", ".$nome, $mensagem, $email);

			?>

          	<script type="text/javascript">
          		alert("E-mail enviado com sucesso! Vamos analisar responder o mais rápido possível!");
          		window.location.href = 'index.php';
          	</script>

  		<?php

		}else{
			?>

			<p class='erro-email'>E-mail não enviado! Por favor, tente novamente mais tarde!</p>
			<center>
				<a class="btn-floating btn-large light-green accent-4 pulse" href="contato.php">
					<i class="material-icons">arrow_back</i>
				</a>
			</center>

			<br><br>

			<?php
		}

	}else{
		?>

		<script> 
			alert('Preencha todos os campos!'); window.location.href = 'contato.php'; 
		</script>

		<?php
	}

?>

<?php

	include "rodape.php";

?>

</body>
</html>
