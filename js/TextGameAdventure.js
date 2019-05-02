
this.Game = this.Game || {};

this.Game.TextGameAdventure = class{
	constructor(player){
		this._player = player;
		this._salas = [];

		//METODO INICIALIZADOR DO JOGO (PONTO DE ENTRADA DA APLICACAO)
		this.comecar();
	}

	comecar(){

		//CRIANDO OBJETOS SALAS

		this.criaSalas();

		//CRIANDO OBJETOS ITENS

		this.criaItens();

		//CRIANDO OBJETOS INIMIGOS

		this.criaInimigos();

		//ADICONA ITENS

		this.adicionaItensParaSalas();

		//CRIANDO CONEXOES E CONFIGURANDO AS SALAS

		this.criaConexoesEntreSalas();

		this.alocaSalas();

		//CRIANDO IVENTARIO

		this.criaIventario([this.pocao]);

		//ALOCA PLAYER

		this.alocaPlayer('Entrada');

		//this.jogadorSelecionaItem();

		this.jogadorSelecionaItem(this.getPlayerIventarioItens()[0]);

	}

	getPlayerIventarioItens(){

		return this.getPlayer().getIventario().getItens();
	}

	criaSalas(){

		this.sala01 = new Game.Sala("Entrada", "");

		this.sala01.setDescricao(`Esta grande sala de jantar em forma de L
		combina a mobília de plástico. O assento de jantar é sem almofada
		e os assentos vivos são almofadados. O chão é de madeira e as paredes são pintadas.
		A luz é fornecida por lâmpadas de mesa. A sala é feita em cores suaves e em geral tem um visual limpo.
		Entre as primeiras coisas que se nota, andar é um buraco na parede.`);
		
		this.sala02 = new Game.Sala("Rol de entrada", "Uma sala grande e escura", new Game.Porta("ABC"));

		this.sala03 = new Game.Sala("Salão de jantar", "Uma terceira sala haha", new Game.Porta("12ERF"));

		this.sala04 = new Game.Sala("Adega", "Quarta sala do jogo ^^");

		this.sala05 = new Game.Sala("Escritório", "Quinta sala do jogo");

		this.sala06 = new Game.Sala("Cofre", "Sexta sala do jogo");

		this.sala07 = new Game.Sala("Galeria", "Sétima sala do jogo");

		this.sala08 = new Game.Sala("Biblioteca", "Oitava sala do jogo");

		this.sala09 = new Game.Sala("Cozinha", "Nona sala do jogo");

		this.sala10 = new Game.Sala("Sala de Troféus", "Décima sala do jogo");

		this.sala11 = new Game.Sala("Ateliê", "Décima primeira sala do jogo");

		this.sala12 = new Game.Sala("Quarto Principal", "Décima segunda sala do jogo");

		this.sala13 = new Game.Sala("Laboratório", "Décima terceira sala do jogo");

		this.sala14 = new Game.Sala("Oficina", "Décima quarta sala do jogo");
		
		this.sala14.setDescricao(`Este quarto pequeno e retangular dispõe de móveis de madeira,
		 metal e vidro. O chão é acarpetado e as paredes são pintadas com um dado de painéis.
		  A luz é fornecida por lâmpadas de parede. A sala é feita em tons de terra frios e em geral parece muito antiquado.
		   Entre as primeiras coisas que se nota uma caminhada estão uma coleção de bugigangas e uma penteadeira.`);

		this.sala15 = new Game.Sala("Adega", "Décima quinta sala do jogo");

		this.sala16 = new Game.Sala("Jardim de Inverno", "Décima sexta sala do jogo");

		this.sala17 = new Game.Sala("Quarto do filho", "Décima sétima sala do jogo");

		this.sala18 = new Game.Sala("sala18", "Décima oitava sala do jogo");

		this.sala19 = new Game.Sala("sala19", "Décima nona sala do jogo");

		this.sala20 = new Game.Sala("sala20", "Vigésima sala do jogo");

		this.corredorA = new Game.Sala("Corredor A", "O primeiro corredor do jogo");

		this.corredorB = new Game.Sala("Corredor B", "O segundo corredor do jogo");

		this.corredorC = new Game.Sala("Corredor C", "O terceiro corredor do jogo");

	}

	criaItens(){

		this.chave1 = new Game.Chave("chave1", "Chave usada para abrir a fechadura 1", "ABC");
		this.chave1.addOpcao(new Game.Opcao("Usar"));
		this.chave1.addOpcao(new Game.Opcao("Deixar"));
		this.chave1.addOpcao(new Game.Opcao("Olhar"));

		this.chave4 = new Game.Item("chave4", "Chave usada para abrir a fechadura 4");
		this.chave4.addOpcao(new Game.Opcao("Usar"));
		this.chave4.addOpcao(new Game.Opcao('Deixar'));
		this.chave4.addOpcao(new Game.Opcao('Olhar'));

		this.chave6 = new Game.Item("chave6", "Chave usada para abrir a fechadura 6");

		this.pocao = new Game.Item("pocao", "Um frasco que recupera energia");
		this.pocao.addOpcao(new Game.Opcao("Beber"));
		this.pocao.addOpcao(new Game.Opcao("Deixar"));

		this.pocaoGrande = new Game.Item("pocaoG", "Um grande frasco que recupera 100 pontos de energia");
		this.pocaoGrande.addOpcao(new Game.Opcao('Beber'));

		this.chave = new Game.Item("chave", "Chave do calabouço");

		this.livro = new Game.Item('livro aberto', 'Um livro empoeirado com muitas páginas');
		this.livro.addOpcao(new Game.Opcao('Pegar'));
	}

	criaInimigos(){

		this.inimigo = new Game.Inimigo("slime", 1, 30, 2, 6, 6, 8);
	}

	adicionaItensParaSalas(){

		this.sala01.addItem(this.chave1);
		this.sala01.addItem(this.chave4);
		this.sala01.addItem(this.pocao);

		this.sala02.addItem(this.pocaoGrande);
		this.sala02.addItem(this.livro);
		this.sala03.addItem(this.chave6);
	}

	addConexao(sala1, direcao, sala2){

		sala1.addConexao(direcao, sala2);
	}

	trancarSala(sala){

		sala.getPorta().trancar();
	}

	criaConexoesEntreSalas(){

		//SALA01
		
		this.addConexao(this.sala01, 'leste', this.sala02);

		//SALA02
		
		this.addConexao(this.sala02, 'oeste', this.sala01);
		this.addConexao(this.sala02, 'leste', this.corredorA);

		//CORREDOR A
		this.addConexao(this.corredorA, 'oeste', this.sala02);
		this.addConexao(this.corredorA, 'leste', this.sala03);
		this.addConexao(this.corredorA, 'sul', this.corredorB);

		//SALA03
		
		this.trancarSala(this.sala03);
		this.addConexao(this.sala03, 'oeste', this.corredorA);

		//CORREDOR B
		this.addConexao(this.corredorB, 'oeste', this.sala05);
		this.addConexao(this.corredorB, 'leste', this.sala06);
		this.addConexao(this.corredorB, 'norte', this.corredorA);
		this.addConexao(this.corredorB, 'sul', this.corredorC);
		this.addConexao(this.corredorB, 'sudoeste', this.sala08);
		this.addConexao(this.corredorB, 'sudeste', this.sala09);

		//SALA04
		this.addConexao(this.sala04, 'sudeste', this.sala08);

		//SALA05
		this.addConexao(this.sala05, 'leste', this.corredorB);

		//SALA06
		this.addConexao(this.sala06, 'oeste', this.corredorB);

		//SALA08
		this.addConexao(this.sala08, 'oeste', this.sala07);
		this.addConexao(this.sala08, 'nordeste', this.corredorB);

		//SALA09
		this.addConexao(this.sala09, 'noroeste', this.corredorB);
		this.addConexao(this.sala09, 'leste', this.sala10);

		//SALA10
		this.addConexao(this.sala10, 'oeste', this.sala09);
		this.addConexao(this.sala10, 'norte', this.sala04);

		//CORREDOR C
		this.addConexao(this.corredorC, "oeste", this.sala14);
		this.addConexao(this.corredorC, "leste", this.sala15);
		this.addConexao(this.corredorC, "sul", this.sala18);
		this.addConexao(this.corredorC, "norte", this.corredorB);

		//SALA14
		this.addConexao(this.sala14, "leste", this.corredorC);
		this.addConexao(this.sala14, "oeste", this.sala13);
		this.addConexao(this.sala14, "sul", this.sala17);

		//SALA15
		this.addConexao(this.sala15, "oeste", this.corredorC);
		this.addConexao(this.sala15, "leste", this.sala16);

		//SALA16
		this.addConexao(this.sala16, "oeste", this.sala15);

		//SALA13
		this.addConexao(this.sala13, "leste", this.sala14);

		//SALA17
		this.addConexao(this.sala17, "norte", this.sala14);
		this.addConexao(this.sala17, "sul", this.sala19);

		//SALA19
		this.addConexao(this.sala19, "norte", this.sala17);

		//SALA18
		this.addConexao(this.sala18, "norte", this.corredorC);
		this.addConexao(this.sala18, "oeste", this.sala13);
		this.addConexao(this.sala18, "leste", this.sala11);

		//SALA11
		this.addConexao(this.sala11, "leste", this.sala12);
		this.addConexao(this.sala11, "sul", this.sala15);

		//SALA12
		this.addConexao(this.sala12, "sul", this.sala07);

		//SALA07
		this.addConexao(this.sala07, "leste", this.sala08);
	}

	addSala(sala){

		this._salas.push(sala);

	}

	alocaSalas(){

		//ADICIONANDO AS SALAS PARA O JOGO

		this.addSala(this.sala01);
		this.addSala(this.sala02);
		this.addSala(this.sala03);
		this.addSala(this.sala04);
		this.addSala(this.sala05);
		this.addSala(this.sala06);
		this.addSala(this.sala07);
		this.addSala(this.sala08);
		this.addSala(this.sala09);
		this.addSala(this.sala10);
		this.addSala(this.sala11);
		this.addSala(this.sala12);
		this.addSala(this.sala13);
		this.addSala(this.sala14);
		this.addSala(this.sala15);
		this.addSala(this.sala16);
		this.addSala(this.sala17);
		this.addSala(this.sala18);
		this.addSala(this.sala19);
		this.addSala(this.sala20);
		this.addSala(this.corredorA);
		this.addSala(this.corredorB);
		this.addSala(this.corredorC);

	}

	criaIventario(itens=[]) {

		//CRIANDO O IVENTARIO DO JOGADOR
		this.iventario = new Game.Iventario();

		itens.forEach(function(item){

			this.iventario.addItem(item);

		}.bind(this));

		//CONFIGURANDO O PLAYER NO INICIO DO JOGO
		this.getPlayer().setIventario(this.iventario);
	}

	jogadorSelecionaItem(item){

		let botoesItens = document.querySelector('.hand');
		this.getPlayer().getIventario().getItens().forEach(function(it){

			if(it === item){

				//console.log(it);

				this.getPlayer().selecionarItem(it);
				this.atualizaIventario();
				return;
			}

		}.bind(this));
	}

	alocaPlayer(nomeSala){

		this.setPlayer(nomeSala);
	}

	getPlayer(){

		return this._player;
	}

	setPlayer(sala){

		if(sala instanceof Game.Sala){

			this.getPlayer().setSalaAtual(sala);
			this.playerLocalizacao();
			this.playerStatus();
			this.atualizaIventario();

		}else if(typeof sala == "string"){

			this._salas.forEach(function(s){

				if(s.getNome() == sala){

					s.setVisitada(true);
					this.getPlayer().setSalaAtual(s);
					this.playerLocalizacao();
					this.playerStatus();
					this.atualizaIventario();

					return;
				}

			}.bind(this));
		}
		
	}

	addSala(sala){

		this._salas.push(sala);
	}

	registraEvento(...textos){

		for(let i=0; i< textos.length;i++){

			console.log("> " + textos[i]);
		}
	}

	movimentaPlayer(direcao){

		this.getPlayer().mover(direcao);

		this.atualizaHUD();

		if(this.getPlayer().movimentou() == "sim"){

			this.registraEvento("O jogador se movimentou na direcao " + direcao + " chegando em " + this.getPlayer().getSalaAtual().getNome().toUpperCase());
		}
		else if(this.getPlayer().movimentou() == "nao"){

			alert("A sala escolhida esta trancada sendo assim o jogador permanece na mesma sala!!!");
			this.registraEvento("O jogador permaneceu na mesma sala em " + this.getPlayer().getSalaAtual().getNome().toUpperCase());
		}
		else if(this.getPlayer().movimentou() == "inexistente"){

			alert("A direcao escolhida nao existe tente outra!");
			this.registraEvento("O jogador permaneceu na mesma sala em " + this.getPlayer().getSalaAtual().getNome().toUpperCase());
		}
		
	}

	playerLocalizacao(){

		let labelLocalizacao = this.acharLocalizacao().getNome();

		document.querySelector(".location h1").innerHTML = labelLocalizacao;

		this.desenhaSaidasLocalizacao();

		this.desenhaDescricaoLocalizacao();

		this.desenhaEuPossoVer();
		
	}

	desenhaEuPossoVer(){

		let itensNoLocal = this.acharLocalizacao().getItens();
		let containerObjetos = document.querySelector(".objects");
		containerObjetos.innerHTML = '';

		itensNoLocal.forEach(function(item){

			let labelObjeto = document.createElement("li");
			labelObjeto.innerHTML = item.getNome() + " ";
			containerObjetos.appendChild(labelObjeto);

			item.getOpcoes().forEach(function(opcao){

				let botaoOpcao = document.createElement('button');
				botaoOpcao.type = 'button';
				botaoOpcao.innerHTML = opcao.getDescricao();
				botaoOpcao.style.marginLeft = '5px';
				labelObjeto.appendChild(botaoOpcao);

			}.bind(this));

			

		}.bind(this));

	}

	desenhaDescricaoLocalizacao(){

		let labelDescricao = document.querySelector(".description-content");
		labelDescricao.innerHTML = "";
		let descricao = document.createElement("p");
		labelDescricao.appendChild(descricao);

		descricao.innerHTML = this.acharLocalizacao().getDescricao();
	}

	desenhaSaidasLocalizacao(){

		let containerSaidas = document.querySelector(".nav");

		containerSaidas.innerHTML = "SAÍDAS: ";

		let conexoes = this.acharLocalizacao().getConexoes();

		for(let i in conexoes){

			if(conexoes[i] != null){

				//console.log(i + ": " + conexoes[i].getNome());
				let botao = document.createElement("button");
				botao.type = "button";
				botao.addEventListener('click', function(){

					this.movimentaPlayer(i);

				}.bind(this));
				containerSaidas.appendChild(botao);

				if(conexoes[i].foiVisitada()){

					botao.innerHTML = conexoes[i].getNome();
				}
				else{

					botao.innerHTML = "sala desconhecida";
				}
			}
			
		}
	}

	acharLocalizacao(){

		let localizacao = null;

		this._salas.forEach(function(sala)
		{
			if(sala.getID() == this.getPlayer().getSalaAtual().getID())
			{
				localizacao = sala;

				return localizacao;
			}

		}.bind(this));

		return localizacao;
	}

	atualizaHUD(){

		this.playerLocalizacao();
		this.atualizaIventario();
	}

	playerStatus(){

		/*console.log("");
		console.log("******PLAYER STATUS******");
		console.log("Nome: " + this.getPlayer().getNome());
		console.log("Condicao: " + this.getPlayer().getCondicao());
		console.log("Level: " + this.getPlayer().getLevel());
		console.log("HP: " + this.getPlayer().getCurrentHP() + " / " + this.getPlayer().getTotalHP());
		console.log("MP: " + this.getPlayer().getCurrentMP() + " / " + this.getPlayer().getTotalMP());
		console.log("AT: " + this.getPlayer().getAT());
		console.log("DF: " + this.getPlayer().getDF());
		console.log("EXP: " + this.getPlayer().getEXP());
		console.log("NEXT LEVEL: " + this.getPlayer().getNextLevel());*/
	}

	atualizaIventario() {

		this.desenhaIventario();

		this.desenhaSegurando();

		this.desenhaOpcoesItemSegurando();

	}

	desenhaOpcoesItemSegurando(){

		let containerSegurando = document.querySelector(".hand");

		this.getPlayer().getItemSelecionado().getOpcoes().forEach(function(op, i)
		{
			let opcao = document.createElement("button");
			opcao.type = "button";
			opcao.innerHTML = op.getDescricao();

			containerSegurando.appendChild(opcao);

		}.bind(this));

	}

	desenhaSegurando(){

		let containerSegurando = document.querySelector(".hand");

		let selecionado = "";

		this.getPlayer().selecionarItem(this.getPlayer().getIventario().getItens()[0]);

		if(this.getPlayer().getItemSelecionado() != null)
		{
			selecionado = this.getPlayer().getItemSelecionado().getNome();
		}

		containerSegurando.innerHTML = "Estou segurando: <span class='strong'>" + selecionado.toUpperCase() + " </span>";
	}

	desenhaIventario(){

		let listaIventario = document.querySelector(".itens");
		listaIventario.innerHTML = "";
		let iventario = this.getPlayer().getIventario();

		iventario.getItens().forEach(function(i){

			let listaItem = document.createElement("li");

			let item = document.createElement("button");
			item.type = "button";
			item.innerHTML = i.getNome();

			if(this.getPlayer().getItemSelecionado()){

				if(this.getPlayer().getItemSelecionado().getNome().toUpperCase() === item.innerHTML.toUpperCase()){

					item.classList.add('equip');
				}
				
			}

			listaItem.appendChild(item);

			listaIventario.appendChild(listaItem);

		}.bind(this));
	}

}