
this.Game = this.Game || {};

this.Game.Item = class
{
	constructor(nome, descricao)
	{
		this._nome = nome;
		this._descricao = descricao;
		this._usado = false;
		this._tipo = Game.Item.Tipo.NORMAL;
		this._opcoes = [];
		this._luz = false;
	}

	getNome()
	{
		return this._nome;
	}

	getDescricao()
	{
		return this._descricao;
	}

	foiUsado()
	{
		return this._usado;
	}

	getTipo()
	{
		return this._tipo;
	}

	getOpcoes()
	{
		return this._opcoes;
	}

	emiteLuz()
	{
		return this._luz;
	}

	setLuz(luz)
	{
		this._luz = luz;
	}

	setTipo(tipo)
	{
		this._tipo = tipo;
	}

	setOpcoes(opcoes)
	{
		this._opcoes = opcoes;
	}

	addOpcao(opcao)
	{
		this._opcoes.push(opcao);
	}

	usar()
	{
		if(!this.foiUsado())
		{
			this._usado = true;
		}
		
	}
}

this.Game.Item.Tipo = {
	NORMAL: 0,
	CURA: 1,
	CHAVE: 2
}