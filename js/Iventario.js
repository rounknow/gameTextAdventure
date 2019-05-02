
this.Game = this.Game || {};

this.Game.Iventario = class
{
	constructor()
	{
		this._itens = [];
	}

	getItens()
	{
		return this._itens;
	}

	addItem(item)
	{
		this._itens.push(item);
	}

	addItens()
	{

	}

	atualizar()
	{
		this.getItens().forEach(function(item, index)
		{
			if(item.foiUsado())
			{
				this.getItens().splice(index, 1);
			}

		}.bind(this));
	}
}