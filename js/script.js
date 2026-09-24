function conversar(){
	var board = document.getElementById("conversas");
	var prof = document.getElementById("prof").value;
	var msg = document.getElementById("msg").value;
	
	if(prof != "eu"){
		var foto = "<img src='img/"+prof+".jpg' />";
		var nomeCorreto =  getNomeCorretoProf(prof);
		board.innerHTML += geraMensagem(foto, nomeCorreto, msg);
	} else {
		board.innerHTML += saidaEu(msg);
	}
		
	document.getElementById("msg").value = '';	
}

function saidaEu(msg){
	var enviado = "<img class='enviado' src='img/enviado.png' />";
	var hoje = new Date();
    var h = hoje.getHours();
    var m = hoje.getMinutes();
	var hora = h + ":" + m;
	var saida = "<table class='eu'> " +
					"<tr>"+ 
					   "<td> " + msg + " </td> " +
					   "<td class='enviado'> " + hora + " </td> " +
					   "<td> " + enviado + " </td> " +
					"</tr>"+
				"</table>";
				
	return saida;
}


function limpaCampos(){
	document.getElementById("msg").value = '';
	document.getElementById("conversas").innerHTML = '';
}

function geraMensagem(foto, nomeCorreto, msg){
	var saida = ""+
		"<table id='msgProf'>"+	
			"<tr>"+
			"	<td rowspan='2'>"+ 
					foto +
			"	</td> "+
			"	<td> "+
			"		<strong> "+nomeCorreto+" diz: </strong> "+
			"	</td> "+
			"</tr> "+
			"<tr> "+
			"	<td> "+ msg +" </td> "+
			"</tr> "+
		"</table> ";
	return saida;
}

function getNomeCorretoProf(prof){
	var nomeCorreto = "";
	
	switch(prof){
		case "andre":
			nomeCorreto = "André";
			break;
		case "jao":
			nomeCorreto = "João";
			break;
		case "marcelo":
			nomeCorreto = "Marcelo";
			break;
		case "mirella":
			nomeCorreto = "Renata";
			break;
		case "milton":
			nomeCorreto = "Milton";
			break;
		case "ze":
			nomeCorreto = "José";
			break;
		case "malara":
			nomeCorreto = "Malara";
			break;
	}
	
	return nomeCorreto;
}
