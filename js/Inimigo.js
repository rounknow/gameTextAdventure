
this.Game = this.Game || {};

this.Game.Inimigo = class extends this.Game.SerVivo
{
	constructor(nome, level, totalHP, totalMP, at, df, expDeixada)
	{
		super(nome, level, totalHP, totalMP, at, df);

		this._expDeixada = expDeixada;
	}
}