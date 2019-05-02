<?php
	
	session_start();
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="Jogo de aventura em forma de texto">
		<meta name="keywords" content="Ronaldo Moreira, Games, Desenvolvimento, Javascript, Canvas">
		<meta name="author" content="Ronaldo Aprecido Augusto Moreira">
		<link href="https://fonts.googleapis.com/css?family=Ubuntu+Mono" rel="stylesheet">
		<link rel="stylesheet" href="/assets/css/reset.css" type="text/css">
		<link rel="stylesheet" href="/assets/css/normalize.css" type="text/css">
		<!--[if lt IE 9]>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
		<![endif]-->
		<title>Text Game Adventure</title>
		<style>
			
			body
			{
				font-family: 'Ubuntu Mono', monospace;
				background: #171717;
				color: #cccccc;
			}
			
			button
			{
				cursor: pointer;
			}
			
			#game
			{
				border: 5px dashed gray;
				padding: 20px;
				float: left;
			}
			#game > div
			{
				margin-bottom: 10px;
			}
			#tituloGame
			{
				text-align: center;
				visibility: hidden;
			}
			
			#playerContainer
			{
				float: left;
				border: 1px solid red;
				padding: 20px;
				width: 500px;
			}
			
			#playerContainer > div , #localizacao > div
			{
				padding: 20px;
				margin-bottom: 10px;
				height: 139px;
			}
			
			#labelStatusJogador
			{
				text-align: center;
				position: relative;
				top: -15px;
			}
			
			#playerStatus
			{
				border: 1px solid cyan;
			}
			
			#playerItens
			{
				border: 1px solid blue;
			}
			
			#labelIventario
			{
				position: relative;
				top: -17px;
				left: 185px;
			}
			
			#playerAcoes
			{
				border: 1px solid orange;
				position: relative;
				height: 100px;
			}
			
			#playerAcoes > p
			{
				position: absolute;
			}
			
			#botaoNorte
			{
				left: 88px;
				top: 47px;
			}
			
			#botaoOeste
			{
				top: 76px;
				left: 17px;
			}
			
			#botaoLeste
			{
				top: 76px;
				left: 158px;
			}
			
			#botaoSul
			{
				top: 105px;
				left: 88px;
			}
			
			#botaoAtacar
			{
				left: 295px;
				top: 47px;
			}
			
			#botaoDefender
			{
				left: 375px;
				top: 47px;
			}
			
			#botaoEsquivar
			{
				left: 295px;
				top: 76px;
			}
			
			#botaoMagia
			{
				left: 376px;
				top: 76px;
			}
			
			#botaoUsar
			{
				left: 295px;
				top: 128px;
			}
			
			#botaoPegar
			{
				left: 376px;
				top: 128px;
			}
			
			#inimigoAtual
			{
				border: 1px solid green;
			}
			
			#localizacao
			{
				border: 1px solid red;
				float: right;
				padding: 10px;
				height: 785px;
			}
			
			#localizacao > div 
			{
				border: 1px solid pink;
			}
			
			#descricao
			{
				border: 1px solid black;
			}
			
			#LocalizacaoItens
			{
				border: 1px solid #6c00ff;
			}
			
			#inimigosContainer
			{
				border: 1px solid #503209;
			}
			
			#labelAcoes
			{
				left: 183px;
				top: 1px;
			}
			
			#labelMovimentacao
			{
				left: 77px;
			}
			
			#labelBatalha
			{
				left: 346px;
			}
			
			#labelItem
			{
				left: 358px;
				top: 107px;
			}
			
			.botoesAcao
			{
				position: absolute;
				width: 76px;
			}
			
		</style>
	</head>
	<body>
		<div id="game">
			<button>Logoff</button>
			<h1 id="tituloGame">Text Game Adventure</h1>
			<div id="playerContainer">
				<div id="playerStatus">
					<p id="labelStatusJogador">STATUS DO JOGADOR</p>
					<h2 style="text-transform: uppercase; margin-top: -13px;">NOME: <?php  echo $_SESSION["usuario"]   ?></h2>
					<h2>LEVEL: <?php  echo $_SESSION["level"]  ?></h2>
					<h2>HP: <?php  echo $_SESSION["currentHP"]  . " / " . $_SESSION["totalHP"] ?></h2>
					<h2>MP: <?php echo $_SESSION["currentMP"] .  "/ " . $_SESSION["totalMP"] ?></h2>
					<h2>AT: <?php  echo $_SESSION["AT"]  ?></h2>
					<h2>DF: <?php  echo $_SESSION["DF"] ?></h2>
					<h2>ESQ: <?php echo $_SESSION["ESQ"] ?></h2>
					<h2>EXP: <?php echo $_SESSION["EXP"] ?></h2>
					<h2>NEXT LVL: 750</h2>
				</div>
				<div id="playerItens">
					<div id="iventario">
						<p id="labelIventario">IVENTÁRIO</p>
						<p>LISTA DE ITENS</p>
						<select>
							<option>Itens</option>
							<option>Potion 50HP</option>
							<option>Potion 50HP</option>
							<option>Potion 50HP</option>
							<option>Potion 50HP</option>
							<option>Potion 50HP</option>
							<option>Potion 50HP</option>
							<option>Potion 50HP</option>
							<option>Potion 50HP</option>
							<option>Potion 50HP</option>
						</select>
					</div>
					<div id="iventarioDescricaoItem">
						<p>Descrição: </p>
						<p>Este item deve ser usado somente bla bla bla.</p>
					</div>
					
				</div>
				<div id="playerAcoes">
					<p id="labelAcoes">AÇÕES DO JOGADOR</p>
					<p id="labelMovimentacao">MOVIMENTAÇÂO</p>
					<p id="labelBatalha">BATALHAR</p>
					<p id="labelItem">ITEM</p>
					<button id="botaoNorte" class="botoesAcao">Norte</button>
					<button id="botaoOeste" class="botoesAcao">Oeste</button>
					<button id="botaoLeste" class="botoesAcao">Leste</button>
					<button id="botaoSul" class="botoesAcao">Sul</button>
					<button id="botaoAtacar" class="botoesAcao">Atacar</button>
					<button id="botaoDefender" class="botoesAcao">Defender</button>
					<button id="botaoEsquivar" class="botoesAcao">Esquivar</button>
					<button id="botaoMagia" class="botoesAcao">Magia</button>
					<button id="botaoUsar" class="botoesAcao">Usar</button>
					<button id="botaoPegar" class="botoesAcao">Pegar</button>
				</div>
				<div id="inimigoAtual">
					<div id="inimigoAtualListaInimigos">
						<p>INIMIGO ATUAL:</p>
						<select>
							<option>Slime LVL 1</option>
							<option>Slime LVL 3</option>
							<option>Slime LVL 1</option>
							<option>Slime LVL 5</option>
						</select>
					</div>
					<div id="inimigoAtualDetalhesInimigo">
						<p>Detalhes: </p>
						<p>HP 32 / 32</p>
						<p>MP 15 / 15</p>
					</div>
					
				</div>
			</div>
			<div id="localizacao">
				<div id="descricao">
					<h2>LOCAL X</h2>
					<img src="">
					<p>Descrição:</p>
					<p>Local escuro aonde se pode ver uma pequena tocha.</p>
				</div>
				<div id="LocalizacaoItens">
					<p>ITENS NO LOCAL:</p>
					<select>
						<option>Itens</option>
						<option>Potion 100HP</option>
						<option>Shield</option>
						<option>Sword</option>
					</select>
				</div>
				<div id="inimigosContainer">
					<p>INIMIGOS NO LOCAL:</p>
					<p>Slime LVL 1</p>
					<p>Slime LVL 3</p>
					<p>Slime LVL 1</p>
					<p>Slime LVL 5</p>
				</div>
			</div>
		</div>
	</body>
</html>