//Maires revealing module pattern
var Maires = (function() {
	//declare variables
	var tatalMaires = 54;
	var debutAnne 	= 1833;
	var finAnne		= 2013;
	var req;
	var _getNombreMaires = function(callback) {
		var xhr = new XMLHttpRequest();
		var jsonMaires;
		xhr.open("POST", "http://jmartel.webdev.cmaisonneuve.qc.ca/582-853/ex3/mairesAjax.php?requete=liste", true);
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		req = "type=date&ordre=asc";
		xhr.onreadystatechange = function() {
				if (xhr.status == 200 && xhr.readyState == xhr.DONE) {
					jsonMaires = JSON.parse(xhr.responseText);
					callback(jsonMaires.length);				
				}
		};
		xhr.send(req);
	};


	var _getRechercheMaires = function(type, valeur, callback) {
			if (!(arguments.length==3)) 
				throw "Recherche Maires requiert deux arguments et callback (Maires.rechercheMaires({type:[date, nom], valeur:\"recherche\", callback)})";
			//pour date
			if (type == "date") {
				if (isNaN(valeur))	
					throw "La valeur doit être un nombre";
				if (!((valeur.toString().length == 4) && ( valeur >= debutAnne) && ( valeur <= finAnne)))	
					throw "La valeur doit contenir 4 cifre, comprise entre "+ debutAnne +" et "+finAnne;
			} 
		
			//pour nom
			if (type = "nom") {
				if (!(typeof valeur == "string")) 
					throw "La valeur doit être une text";	
			} 
			//

		var xhr = new XMLHttpRequest();
		var jsonMaires;
		xhr.open("POST", "http://jmartel.webdev.cmaisonneuve.qc.ca/582-853/ex3/mairesAjax.php?requete=recherche", true);
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		req = "type="+type+"&valeur="+valeur;		
		xhr.onreadystatechange = function() {
				if (xhr.status == 200 && xhr.readyState == xhr.DONE) {
					jsonMaires = JSON.parse(xhr.responseText);
					callback(jsonMaires);				
				}
		};
		xhr.send(req);
	};
	var _getListeMaires = function (type, ordre, callback) { 	
			if (!(arguments.length==3)) 
				throw "Liste Maires requiert deux arguments et callback (Maires.rechercheMaires({type:[date, nom], ordre:[asc, desc], callback)})";
			if ( !(((ordre == "asc") && !(ordre == "desc")) || (!(ordre == "asc") && (ordre == "desc"))) )
				throw "Ordre asc or desc";


			var xhr = new XMLHttpRequest();
			var jsonMaires;
			//xhr.open("GET", "http://jmartel.webdev.cmaisonneuve.qc.ca/582-853/ex3/mairesAjax.php?requete=liste&type="+type+"&ordre="+ordre+"", true);
			xhr.open("POST", "http://jmartel.webdev.cmaisonneuve.qc.ca/582-853/ex3/mairesAjax.php?requete=liste", true);
			xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			req = "type="+type+"&ordre="+ordre;		
			xhr.onreadystatechange = function() {
					if (xhr.status == 200 && xhr.readyState == xhr.DONE) {
						jsonMaires = JSON.parse(xhr.responseText);
						callback(jsonMaires);
					}
			};
			xhr.send(req);
	};

	
	//public - le function public
	return {
		getNombreMaires: _getNombreMaires,
		rechercheMaires: _getRechercheMaires,
		listeMaires: 	 _getListeMaires
	};
}());


