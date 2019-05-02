
this.Game = this.Game || {};

this.Game.Sala = class
{
	constructor(nome, descricao, porta)
	{
		Game.Sala.numInstancias ++;
		this._ID = Game.Sala.numInstancias;
		this._nome = nome;
		this._descricao = descricao;
		this._itens = [];
		this._inimigos = [];
		this._NPCS = [];
		this._visitada = false;
		this._ligada = false;
		this._conexoes = 
		{
			"norte": null,
			"sul": null,
			"leste": null,
			"oeste": null,
			"noroeste": null,
			"nordeste": null,
			"sudoeste": null,
			"sudeste": null
		};
		this._porta = porta;
	}

	getID()
	{
		return this._ID;
	}

	getNome()
	{
		return this._nome;
	}

	getDescricao()
	{
		return this._descricao;
	}

	getConexoes()
	{
		return this._conexoes;
	}

	getItens()
	{
		return this._itens;
	}

	getInimigos()
	{
		return this._inimigos;
	}

	getPorta()
	{
		return this._porta;
	}

	foiVisitada()
	{
		return this._visitada;
	}

	estaLigada()
	{
		return this._ligada;
	}

	ligaDesliga()
	{
		this._ligada = !this._ligada;
	}

	setVisitada(estado)
	{
		this._visitada = estado;
	}

	setDescricao(descricao)
	{
		this._descricao = descricao;
	}

	addItem(item)
	{
		this._itens.push(item);
	}

	addInimigo(inimigo)
	{
		this._inimigos.push(inimigo);
	}

	addConexao(direcao, sala)
	{
		if(this._conexoes.hasOwnProperty(direcao))
		{
			this._conexoes[direcao] = sala;
		}
		
	}

}

this.Game.Sala.numInstancias = 0;