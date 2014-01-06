/* 
 * Panier
 */
var Panier = (function() {
		
	//get articles 
	var _getArticlesLocalStorage = function() {
		for (var i = 0, totalM = 0; i < localStorage.length; i++){
			//console.log(localStorage.key(i));
			if (localStorage.key(i) != "total") {
		  var article = JSON.parse(localStorage.getItem(localStorage.key(i)));
		  //console.log (article);
		  //console.log(article.oArticelCategorie);
		  $( "<article id="+article.oArticleID+ " class=\"produit\">\n\
				<header class=\"nom\">"+article.oArticelNom+"</header>\n\
				<section class=\"image\">\n\
					<img src=\""+article.oArticelImage+"\"  class=\"artimg\">\n\
				</section>\n\
				<section class=\"description\">"+article.oArticelDescription+"</section>\n\
				<section class=\"prix\">\n\
					<span class=\"prix-valeur\" data-prix=\""+article.oArticlePrixValeurDef+"\">"+article.oArticlePrixValeur+"</span>\n\
					<span class=\"prix-unite\">"+article.oArticlePrixUnite+"</span>\n\
				</section>\n\
				<section class=\"categorie\">"+article.oArticelCategorie+"</section>\n\
				<button type=\"button\" class=\"close\">&times;</button>\n\
				<div class=\"btn-group qantity\">\n\
					<button type=\"button\" class=\"btn btn-default up\"><span class=\"glyphicon glyphicon-chevron-up\"></span></button>\n\
					<button type=\"button\" class=\"btn btn-default quantityval\">"+article.oArticelQuantity+"</button>\n\
					<button type=\"button\" class=\"btn btn-default down\"><span class=\"glyphicon glyphicon-chevron-down\"></span></button>\n\
				</div>\n\
			</article>").appendTo( ".panier" );
			totalM += parseFloat(article.oArticlePrixValeur);
		}	
	  }
	  //ajouter events
	  $("#montantotal").html(totalM.toFixed(2));
	  //$( ".qantity" ).on( "click", _montanTotal );
	  $(".close").on("click", _suprimerArticle);
	  $(".up").on("click", _ajouterQuantity);
	  $(".down").on("click", _suprimerQuantity);
	  $("#passerCommande").on("click", _commande2bd);
	  $("#visualiserCommande").on("click", _emailverify);
	 
	  _totalArticle();

	  
	  //Panier.montanTotal();
	}

	//le montant total de son achat
	var _totalArticle = function(){
		$("a.btn-danger > span").html(localStorage.getItem("total"));
		//console.count("_totalArticle");
	}
	//suprime un article
	var _suprimerArticle = function(){
		$( this ).parent().remove();
		var idArticle = $(this).parent().attr("id");
		localStorage.removeItem(idArticle);

		var totalArticleLocalStorage = parseFloat(localStorage.getItem("total"))-1;
		localStorage.setItem("total", totalArticleLocalStorage);
		_montanTotal();
		_totalArticle();
		//console.count("_suprimerArticle");
	}
	//calcule le montane total
	var _montanTotal = function(e) {
		var totalM=0;
		$( ".prix-valeur" ).each(function() {
			totalM += parseFloat($(this).text());
		});
		$("#montantotal").html(totalM.toFixed(2));
	}

	//ajouter Quantity
	var _ajouterQuantity = function() {
		var quantityval = $(this).parent().children(".quantityval").text();
		quantityval++;
		$(this).parent().children(".quantityval").html(quantityval);
		var articlePrixQuantity = $(this).parent().parent().children().children(".prix-valeur").attr("data-prix");
		var qp = articlePrixQuantity * quantityval;	
		$(this).parent().parent().children().children(".prix-valeur").html(qp.toFixed(2));

		_updateArticlesLocalStorage($(this).parent().parent().attr("id"));
		_montanTotal();
		//console.log(qp);
	}

	//suprimer Quantity
	var _suprimerQuantity = function() {
		var quantityval = $(this).parent().children(".quantityval").text();
		quantityval--;
		if (quantityval == 0) {
			quantityval = 1;
		}
		$(this).parent().children(".quantityval").html(quantityval);
		var articlePrixQuantity = $(this).parent().parent().children().children(".prix-valeur").attr("data-prix");
		var qp = articlePrixQuantity * quantityval;	
		$(this).parent().parent().children().children(".prix-valeur").html(qp.toFixed(2));
		
		_updateArticlesLocalStorage($(this).parent().parent().attr("id"));
		_montanTotal();
	}

	//modifier les informations sur les articles en LocalStorage 
	var _updateArticlesLocalStorage = function(el) {
		
		//console.log("este");
		var articleID = el;
		var oArticle = new Object();
			oArticle.oArticleID = articleID;
			oArticle.oArticelNom = $( "#"+articleID+" .nom" ).text();
			oArticle.oArticelDescription = $( "#"+articleID+" .description" ).text();
			oArticle.oArticelImage = $( "#"+articleID+" .artimg" ).attr( "src" );
			oArticle.oArticelCategorie = $( "#"+articleID+" .categorie" ).text();
			oArticle.oArticelQuantity = $( "#"+articleID+" .quantityval" ).text();
			oArticle.oArticlePrixValeur = $( "#"+articleID+" .prix-valeur" ).text();
			oArticle.oArticlePrixValeurDef = $( "#"+articleID+" .prix-valeur" ).attr("data-prix");
			oArticle.oArticlePrixUnite = $( "#"+articleID+" .prix-unite" ).text();
		//console.dir(oArticle);
		var jArticle = JSON.stringify(oArticle);
		localStorage.setItem(articleID, jArticle);
		//localStorage.setItem("total", 5);
	}

	//Ajax ajoute la commande dans Base de Donne
	var _commande2bd = function(callback) {

		//console.log("_commande2bd");
		function fromLocalStor () {
			var pls="";
			var article;
			for (var i = 0, totalM = 0; i < localStorage.length; i++){
				
				if (localStorage.key(i) != "total") {
			  article = JSON.parse(localStorage.getItem(localStorage.key(i)));
			  //console.log (article);
			  //console.log(article.oArticelCategorie);
			  pls += "<article id="+article.oArticleID+ " class=\"produit\">\n\
					<header class=\"nom\">"+article.oArticelNom+"</header>\n\
					<section class=\"image\">\n\
						<img src=\""+article.oArticelImage+"\"  class=\"artimg\">\n\
					</section>\n\
					<section class=\"description\">"+article.oArticelDescription+"</section>\n\
					<section class=\"prix\">\n\
						<span class=\"prix-valeur\" data-prix=\""+article.oArticlePrixValeurDef+"\">"+article.oArticlePrixValeur+"</span>\n\
						<span class=\"prix-unite\">"+article.oArticlePrixUnite+"</span>\n\
					</section>\n\
					<section class=\"categorie\">"+article.oArticelCategorie+"</section>\n\
					<div class=\"btn-group qantity\">\n\
						<button type=\"button\" class=\"btn btn-default quantityval\">"+article.oArticelQuantity+"</button>\n\
					</div>\n\
				</article>";
				totalM += parseFloat(article.oArticlePrixValeur);
				}
				
			}
			return pls;	
		}
	//end 
			function fromLocalStorTotal () {
			for (var i = 0, totalM = 0; i < localStorage.length; i++){
				if (localStorage.key(i) != "total") {
			 		var article = JSON.parse(localStorage.getItem(localStorage.key(i)));
					totalM += parseFloat(article.oArticlePrixValeur);
				}	
			}
			return totalM;	
		}	
		var requestData = {
			types: "inser2bd",
			email: $("#Courriel").val(),
			total: fromLocalStorTotal(), 
			produitbd: fromLocalStor()
		};
		//console.dir(requestData);
		var request = $.ajax({
			url: "/tp3/panier/ajaxControler.php",
			type: "GET",
			data: requestData,
			dataType: "html"
			});

		request.done(function() {
			$("#passer").html("<h2>Merci! <br /> Votre commande a ete enregistree</h2>");
			$("#totalArticle").html();
			localStorage.clear();
			//console.log("of gata");
		});

		request.fail(function( jqXHR, textStatus ) {
			$( "#passer" ).html("Request failed: " + textStatus );
		});
	}


	var _emailverify = function() {
		//console.log("visualiserCommande");
		var useremail =  $("#Courriel").val();
			$(".afficheListeCommande").load( "ajaxControler.php?types=emailverify&email="+useremail);

	}

	//return le methde publique
	return {
		getArticlesLocalStorage: 	_getArticlesLocalStorage,
		montanTotal:				_montanTotal
	}
}());