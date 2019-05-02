this.Game = this.Game || {};

this.Game.Player = class extends this.Game.SerVivo
{
	constructor(nome, level, totalHP, totalMP, at, df)
	{
		super(nome, level, totalHP, totalMP, at, df);
		this._exp = 0;
		this._nextLevel = 30;
		this._salaAtual = null;
		this._iventario = null;
		this._movimento = "";
		this._itemSelecionado = null;
		this._itemAtual = null;

	}

	__get(propriedade){

		var prop = null;
		for(var i in this){

			prop = i;
			prop = prop.replace('_', '');

			if(propriedade === prop){

				return this[i];
			}
		}
	}

	__set(propriedade, valor){

		var prop = null;
		for(var i in this){

			prop = i;
			prop = prop.replace('_', '');

			if(propriedade === prop && valor != null){

				this[i] = valor;
				return;
			}
		}

	}

	getSalaAtual()
	{
		return this._salaAtual;
	}

	setSalaAtual(sala)
	{
		this._salaAtual = sala;
	}

	getItemSelecionado()
	{
		return this._itemAtual;
	}

	selecionarItem(item)
	{
		this._itemAtual = item;
	}

	getEXP()
	{
		return this._exp;
	}

	getNextLevel()
	{
		return this._nextLevel;
	}

	getIventario()
	{
		return this._iventario;
	}

	setIventario(iventario)
	{
		this._iventario = iventario;
	}

	movimentou()
	{
		return this._movimento;
	}

	getConexoesSalaAtual(){

		return this.getSalaAtual().getConexoes();
	}

	mover(direcao){

		let conexoes = this.getConexoesSalaAtual();

		for(let i in conexoes){

			if(direcao == i && conexoes[i] != null){

				if(conexoes[i].getPorta()){

					if(!conexoes[i].getPorta().estaTrancada()){

						this.setSalaAtual(conexoes[i]);
						this._movimento = "sim";
						conexoes[i].setVisitada(true);
						//console.log("> O jogador se movimentou na direcao " + direcao + " chegando em " + this.getSalaAtual().getNome().toUpperCase());
					}else{
					
						this._movimento = "nao";
						//alert("A sala escolhida esta trancada sendo assim o jogador permanece na mesma sala!!!");

					}
				}else{

					this.setSalaAtual(conexoes[i]);
					this._movimento = 'sim';
					conexoes[i].setVisitada(true);
				}

				return;
				
			}
		}
		this._movimento = "inexistente";
		//alert("A direcao escolhida nao existe tente outra!");
		//console.log("> O jogador permaneceu na mesma sala em " + this.getSalaAtual().getNome().toUpperCase() + "!");
	}

	getItensSalaAtual(){

		return this.getSalaAtual().getItens();
	}

	addItemParaIventario(item){

		this.getIventario().addItem(item);
	}

	pegar(item){

		let itens = getItensSalaAtual();

		itens.forEach(function(i, index){

			//console.log(item.getNome());
			if(item.getNome() == i.getNome()){

				this.addItemParaIventario(i);
				this.getItensSalaAtual().splice(index, 1);
				//console.log(index);
			}

		}.bind(this));
	}

	usar(item){

		if(item instanceof Game.Chave){

			console.log(this.getConexoesSalaAtual());

			for(let i in this.getConexoesSalaAtual()){

				let conexao = this.getSalaAtual().getConexoes()[i];

				if(conexao != null && conexao.getPorta().estaTrancada()){

					if(!item.foiUsado() && conexao.getPorta().getFechadura() === item.getID()){

						item.usar();
						this.getIventario().atualizar();
						conexao.getPorta().destrancar();
						console.log("> O jogador usou o item: " + item.getNome());
						console.log("> A porta foi destrancada!");

					}
				}

			}
		}
	}
}
