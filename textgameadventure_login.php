<?php

	//inicia a sessao
	session_start();

	if(isset($_SESSION["logado"]) && $_SESSION["logado"] == "sim")
	{
		header("Location: php/game.php");
	}

?>
<html lang="pt-br">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="Jogo de aventura em forma de texto">
		<meta name="keywords" content="Ronaldo Moreira, Games, Desenvolvimento, Javascript, Canvas">
		<meta name="author" content="Ronaldo Aprecido Augusto Moreira">
		<link href="https://fonts.googleapis.com/css?family=Ubuntu+Mono" rel="stylesheet">
		<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
		<!--<link rel="stylesheet" href="mdl/material.css">-->
		<script defer src="mdl/material.min.js"></script>
		
		<!--[if lt IE 9]>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
		<![endif]-->
		
		<title>Text Game Adventure - Login</title>
		<!--<link rel="stylesheet" href="css/estilo.css" type="text/css">-->
	</head>
	<body>
		<div id="site" class="">
			<?php if(isset($_SESSION["novoCadastro"]) && $_SESSION["novoCadastro"] == "sim") {  ?>
				<dialog id="usuarioCadastrado">
					<h4 class="">Novo Cadastro!</h4>
					<div class="">
						<p>
							Novo usuário criado com sucesso!
						</p>
					</div>
				</dialog>
				<?php  $_SESSION["novoCadastro"] = ""; ?>
			<?php  } else if(isset($_SESSION["logado"]) && $_SESSION["logado"] == "erro") { ?>

					<dialog class="">
						<div class="">
							<p class="">Usuario ou senha incorreto!</p>
						</div>
					</dialog>
			<?php  $_SESSION["logado"] = "" ?>
			<?php }  ?>
			<header id="cabecalho" class="">
				<h2 class="">Text Game Adventure</h2>
				<p class="">O jogo de aventure em forma de texto teste suas escolhas baseadas em ações no jogo e tente sobreviver  em mundo desconhecido.</p>
			</header>
			<main id="principal" class="">
				<section class="">
					<form name="login" action="php/login.php" method="post">
						<h4 class="">Fazer Login</h4>
						<div class="">
							<label for="inputUsuario" class="">Usuário: </label>
							<input class="" type="text" name="usuario" value="" id="inputUsuario" required autocomplete="off">
						</div>
						<div class="">
							<label class="" for="senha">Senha: </label>
							<input class="" type="password" name="senha" value="" required>
						</div>
						<button  style="width: 112px;" class="" type="submit">Logar</button>
					</form>
					
					<form name="cadastrar" action="php/cadastrar.php" method="post">
						<h4 class="">Novo usuário</h4>
						<div class="">
							<label class="" for="novoUsuario">Usuário: </label>
							<input class="" type="text" name="novoUsuario" value="" autocomplete="off" required>
						</div>
						<div class="">
							<label class="" for="novaSenha">Senha: </label>
							<input class="" type="password" name="novaSenha" value="" required>
						</div>
						<button class="" type="submit">Cadastrar</button>
					</form>
				</section>
				
			</main>
			<footer id="rodape" class="">
				
			</footer>
		</div>
		<!--<script src="login.js" type="text/javascript"></script>-->
	</body>
</html>