
this.Game = this.Game || {};

this.Game.SerVivo = class
{
	constructor(nome, level, totalHP, totalMP, at, df)
	{
		this._nome = nome;
		this._level = level;
		this._totalHP = totalHP;
		this._currentHP = totalHP;
		this._totalMP = totalMP;
		this._currentMP = totalMP;
		this._at = at;
		this._df = df;
		this._alvoAtual = null;
		this._condicao = "normal";
	}

	getNome()
	{
		return this._nome;
	}

	getLevel()
	{
		return this._level;
	}

	getCurrentHP()
	{
		return this._currentHP;
	}

	getTotalHP()
	{
		return this._totalHP;
	}

	getCurrentMP()
	{
		return this._currentMP;
	}

	getTotalMP()
	{
		return this._totalMP;
	}

	getAT()
	{
		return this._at;
	}

	getDF()
	{
		return this._df;
	}

	getCondicao()
	{
		return this._condicao;
	}

	atacar()
	{

	}

	defender()
	{

	}

	fugir()
	{

	}

	usar()
	{

	}

	subirLevel()
	{

	}
}