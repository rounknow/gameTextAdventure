this.Game.CarregadorArquivos = class {

	constructor(){

		this._arquivos = [];
	}

	carregar(arquivos, callback = null, durante = null){

		let totalArquivos = arquivos.length;
		let arquivosCarregados = 0;
		let carregando = setInterval(function(){

			if(arquivosCarregados >= totalArquivos){
				
				clearInterval(carregando);
				if(callback !== null){

					callback();
				}
				
			}

		}.bind(this), 1000/30);

		arquivos.forEach(function(arquivo){

			let img = new Image();
			img.src = arquivo;
			img.addEventListener('load', function(){

				arquivosCarregados ++;
				this._arquivos.push(img);

			}.bind(this));

		}.bind(this));
	}

	getArquivoPeloNome(nome){

		let arquivoRetornado = null;

		this._arquivos.forEach(function(arquivo){

			let nomeArquivo = arquivo.src;
			let extensao = nomeArquivo;

			extensao = extensao.substr(extensao.lastIndexOf('.'));

			nomeArquivo = nomeArquivo.substr(nomeArquivo.lastIndexOf('/') + 1);
			nomeArquivo = nomeArquivo.replace(extensao,'');

			if(nomeArquivo === nome){

				arquivoRetornado = arquivo;

			}

		}.bind(this));

		return arquivoRetornado;
	}
}