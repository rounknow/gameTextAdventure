
this.Game = this.Game || {};

this.Game.Chave = class extends this.Game.Item
{
	constructor(nome, descricao, id)
	{
		super(nome, descricao);
		this._ID = id;

		this.setTipo(Game.Item.Tipo.CHAVE);

	}

	getID()
	{
		return this._ID;
	}
}