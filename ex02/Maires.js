//Maires revealing module pattern
var Maires = (function() {
	//declare variables
	var montreal = {
				"maires":[
					{
					"nom":"Coderre",
					"prenom":"Denis",
					"debut":2013,
					"fin":null
					},
					{
					"nom":"Blanchard",
					"prenom":"Laurent",
					"debut":2013,
					"fin":2013
					},
					{
					"nom":"Applebaum",
					"prenom":"Michael",
					"debut":2012,
					"fin":2013
					},
					{
					"nom":"Tremblay",
					"prenom":"G‚rald",
					"debut":2001,
					"fin":2012
					},
					{
					"nom":"Bourque",
					"prenom":"Pierre",
					"debut":1994,
					"fin":2001
					},
					{
					"nom":"Dor‚",
					"prenom":"Jean",
					"debut":1986,
					"fin":1994
					},
					{
					"nom":"Fournier",
					"prenom":"Sarto",
					"debut":1957,
					"fin":1960
					},
					{
					"nom":"Drapeau",
					"prenom":"Jean",
					"debut":1954,
					"fin":1957
					},
					{
					"nom":"Drapeau",
					"prenom":"Jean",
					"debut":1960,
					"fin":1986
					},
					{
					"nom":"Raynault",
					"prenom":"Adh‚mar",
					"debut":1936,
					"fin":1938
					},
					{
					"nom":"Raynault",
					"prenom":"Adh‚mar",
					"debut":1940,
					"fin":1944
					},
					{
					"nom":"Houde",
					"prenom":"Camillien",
					"debut":1934,
					"fin":1936
					},
					{
					"nom":"Houde",
					"prenom":"Camillien",
					"debut":1938,
					"fin":1940
					},
					{
					"nom":"Rinfret",
					"prenom":"Fernand",
					"debut":1932,
					"fin":1934
					},
					{
					"nom":"Houde",
					"prenom":"Camillien",
					"debut":1944,
					"fin":1954
					},
					{
					"nom":"Houde",
					"prenom":"Camillien",
					"debut":1928,
					"fin":1932
					},
					{
					"nom":"Duquette",
					"prenom":"Charles",
					"debut":1924,
					"fin":1926
					},
					{
					"nom":"Martin",
					"prenom":"M‚d‚ric",
					"debut":1914,
					"fin":1924
					},
					{
					"nom":"Martin",
					"prenom":"M‚d‚ric",
					"debut":1926,
					"fin":1928
					},
					{
					"nom":"Lavall‚e ",
					"prenom":"Louis-A.",
					"debut":1912,
					"fin":1914
					},
					{
					"nom":"Edmund Guerin",
					"prenom":"James John",
					"debut":1910,
					"fin":1912
					},
					{
					"nom":"Payette",
					"prenom":"Louis",
					"debut":1908,
					"fin":1910
					},
					{
					"nom":"Archer Ekers",
					"prenom":"Henryÿ",
					"debut":1906,
					"fin":1908
					},
					{
					"nom":"Lapointe",
					"prenom":"Hormida",
					"debut":1904,
					"fin":1906
					},
					{
					"nom":"Cochrane",
					"prenom":"James",
					"debut":1902,
					"fin":1904
					},
					{
					"nom":"Pr‚fontaine",
					"prenom":"Raymond",
					"debut":1898,
					"fin":1902
					},
					{
					"nom":"Wilson-Smith",
					"prenom":"Richard",
					"debut":1896,
					"fin":1898
					},
					{
					"nom":"Villeneuve",
					"prenom":"J.-O.",
					"debut":1894,
					"fin":1896
					},
					{
					"nom":"Desjardins",
					"prenom":"Alphonse",
					"debut":1893,
					"fin":1894
					},
					{
					"nom":"McShane",
					"prenom":"James",
					"debut":1891,
					"fin":1893
					},
					{
					"nom":"Grenier",
					"prenom":"Jacques",
					"debut":1889,
					"fin":1891
					},
					{
					"nom":"Abbott",
					"prenom":"John C.",
					"debut":1887,
					"fin":1889
					},
					{
					"nom":"Beaugrand",
					"prenom":"Honor‚",
					"debut":1885,
					"fin":1887
					},
					{
					"nom":"Rivard",
					"prenom":"S‚vŠre",
					"debut":1879,
					"fin":1881
					},
					{
					"nom":"Hingston",
					"prenom":"William H.",
					"debut":1875,
					"fin":1877
					},
					{
					"nom":"Bernard",
					"prenom":"Aldis",
					"debut":1873,
					"fin":1875
					},
					{
					"nom":"Cassidy",
					"prenom":"Francis",
					"debut":1873,
					"fin":1873
					},
					{
					"nom":"Coursol",
					"prenom":"Charles-Joseph",
					"debut":1871,
					"fin":1873
					},
					{
					"nom":"Workman",
					"prenom":"William",
					"debut":1868,
					"fin":1871
					},
					{
					"nom":"Beaudry",
					"prenom":"Jean-Louis",
					"debut":1862,
					"fin":1866
					},
					{
					"nom":"Beaudry",
					"prenom":"Jean-Louis",
					"debut":1877,
					"fin":1879
					},
					{
					"nom":"Beaudry",
					"prenom":"Jean-Louis",
					"debut":1881,
					"fin":1885
					},
					{
					"nom":"Rodier",
					"prenom":"Charles-S‚raphin",
					"debut":1858,
					"fin":1862
					},
					{
					"nom":"Starnes",
					"prenom":"Henry",
					"debut":1856,
					"fin":1858
					},
					{
					"nom":"Starnes",
					"prenom":"Henry",
					"debut":1866,
					"fin":1868
					},
					{
					"nom":"Nelson",
					"prenom":"Wolfred",
					"debut":1854,
					"fin":1856
					},
					{
					"nom":"Wilson",
					"prenom":"Charles",
					"debut":1851,
					"fin":1854
					},
					{
					"nom":"Fabre",
					"prenom":"douard-Raymond",
					"debut":1849,
					"fin":1851
					},
					{
					"nom":"Easton Mills",
					"prenom":"John",
					"debut":1846,
					"fin":1847
					},
					{
					"nom":"Ferrier",
					"prenom":"James",
					"debut":1844,
					"fin":1846
					},
					{
					"nom":"Bourret",
					"prenom":"Joseph",
					"debut":1842,
					"fin":1844
					},
					{
					"nom":"Bourret",
					"prenom":"Joseph",
					"debut":1847,
					"fin":1849
					},
					{
					"nom":"McGill",
					"prenom":"Peter",
					"debut":1840,
					"fin":1842
					},
					{
					"nom":"Viger",
					"prenom":"Jacques",
					"debut":1833,
					"fin":1836
					}
				]
			};
	var debutAnne 	= 1833;
	var finAnne		= 2013;
	var _getNombreMaires = function() {
			var nbMaires = 0, key;
			for (key in montreal.maires) {
					if (montreal.maires.hasOwnProperty(key)) nbMaires++;
				}
			return nbMaires;
		};
	
	var _getRechercheMaires = function(type, valeur) {
		try { //
			if (!(arguments.length==2)) throw "Recherche Maires requiert deux arguments (Maires.rechercheMaires({type:[date, nom], valeur:\"recherche\")})";
		} catch (err) {
			return err;
		}
		var p=[] //tableau qui contient les résultats de recherche 
		
		switch(type) {
			case "nom":
				if (typeof valeur == 'string') {
					for (var i=0, k=0, p=[], j= _getNombreMaires(); i < j; i++) {
						if (montreal.maires[i].nom.toLowerCase() == valeur.toLowerCase()) {
							p.push(montreal.maires[i]);
							k++;
						}
					}; 
					if (k == 0) {p = valeur+" n'était pas le maire de Montréal";}
				} else {
					p = valeur+" n'est pas une string";
				}
				break;
			case "date":
				if (!isNaN(valeur))  {
					if ((valeur >= debutAnne) && (valeur <= finAnne)){ 
						for (var i=0, j= _getNombreMaires(); i < j; i++) {
							if (montreal.maires[i].debut == valeur || montreal.maires[i].fin == valeur) {
								p.push(montreal.maires[i]);
							};
						};
					} else {
						p = "Année "+valeur+" ne correspond pas, doit être comprise entre "+ debutAnne +" et "+finAnne;
					}
				} else {
					p = "Année "+valeur+" ne pas une nombre";
				} 
				break;
			default:
				p = "Il faut specifie le type de valeur (date ou nom)";
		}
		return p;
	};
	
	var _getListeMaires = function (type, ordre) {
		try { //
			if (!(arguments.length==2)) throw "ListeMaires requiert deux arguments (Maires.listeMaires({type:[\"date\", \"nom\"], ordre:[\"ASC\", \"DESC\"]}))";
		} catch (err) {
			return err;
		}	
		 var l;//tableau avec la liste 
		 if (ordre) {
		 	 var userOrdre = ordre.toLowerCase();
		 	} else {
		 		 var userOrdre = ordre;
		 	}
		switch(type) {
			case "date":
					// Order by date			
					if (userOrdre == "desc") {
						l = montreal.maires.sort(function(a,b) {  if ( b.debut < a.debut ) {return -1;} 									
													if ( b.debut > a.debut ) {return 1;} 					
													return 0; } );
					} else if (userOrdre == "asc") {
						l = montreal.maires.sort(function(a,b) {  if ( a.debut < b.debut ) {return -1;} 									
													if ( a.debut > b.debut ) {return 1;} 					
													return 0; } );
					} else {
						l = "Il faut specifie le ordre (ASC ou DESC)";
					}
					///
					return l;
				break;
			case "nom":
					// Order by name
					
					if (userOrdre == "desc") {
						l = montreal.maires.sort(function(a,b) {  if ( b.nom < a.nom ) {return -1;} 									
													if ( b.nom > a.nom ) {return 1;} 					
													return 0; } );
					} else if (userOrdre == "asc") {
						l = montreal.maires.sort(function(a,b) {  if ( a.nom < b.nom ) {return -1;} 									
													if ( a.nom > b.nom ) {return 1;} 					
													return 0; } );
					} else {
						l = "Il faut specifie le ordre (ASC ou DESC)";
					}
					///
					return l;
				break;

			default:
				l = "Il faut specifie le type de valeur (date ou nom)";
		}
	};
	//public - le function public
	return {
		getNombreMaires: _getNombreMaires,
		rechercheMaires: _getRechercheMaires,
		listeMaires: 	 _getListeMaires
	};
}());