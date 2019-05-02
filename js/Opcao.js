this.Game = this.Game || {};

this.Game.Opcao = class
{
	constructor(descricao, acao = null)
	{
		this._descricao = descricao;
		this._acao = acao;
	}

	getDescricao()
	{
		return this._descricao;
	}

	setDescricao(descricao)
	{
		this._descricao = descricao;
	}

	getAcao()
	{
		return this._evento;
	}

	setAcao(acao)
	{
		this._acao = acao;
	}
}