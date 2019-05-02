
this.Game = this.Game || {};

document.addEventListener("DOMContentLoaded", function()
{

	const carregador = new Game.CarregadorArquivos();

	carregador.carregar(['../textgameadventure/images/background.jpg'], function(){

		const player = new Game.Player("Teste", 1, 100, 20, 12, 9);

		const game = new Game.TextGameAdventure(player);

		document.body.style.display = 'grid';

		
	});
		
});