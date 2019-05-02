
this.Game = this.Game || {};

this.Game.Porta = class
{
	constructor(fechadura, trancada = false)
	{
		this._fechaduraID = fechadura;
		this._trancada = trancada;
	}

	getFechadura()
	{
		return this._fechaduraID;
	}

	estaTrancada()
	{
		return this._trancada;
	}

	trancar()
	{
		if(!this._trancada)
		{
			this._trancada = true;
		}	
	}

	destrancar()
	{
		if(this.estaTrancada())
		{
			this._trancada = false;
		}
	}

}