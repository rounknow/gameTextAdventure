var formulario = document.forms[0];

var formulario2 = document.forms[1];

//login

if(formulario)
{
	formulario.addEventListener("submit", function(evt)
	{
		evt.preventDefault();
		
		var xmlHttp = new XMLHttpRequest();

		var formData = new FormData();

		var inputs = document.forms[0].querySelectorAll("input");

		for(var i=0; i < inputs.length; i++)
		{
			formData.append(inputs[i].name, inputs[i].value);
		}

		xmlHttp.open("POST", "login.php", true);

		xmlHttp.send(formData);

		xmlHttp.onreadystatechange = function()
		{
			if(xmlHttp.readyState == 4 && xmlHttp.status == 200)
			{
				console.log("requisicao efetuada com sucesso!");

				//console.log(xmlHttp.responseText);
				
				var resposta = xmlHttp.responseText;
				
				/*if(resposta == "true")
				{
					location.href = "../jogos/textgameadventure/game.php";
				}
				else if(resposta == "false")
				{
					alert("Usuário ou senha incorreto!");
				}*/
					
			}
		}
	});
}