/* 
 * Panier
 */
var Panier = (function() {
		
	//get articles from jmartel.webdev.cmaisonneuve.qc.ca
	var _getArticlesLocalStorage = function() {
		for (var i = 0, totalM = 0; i < localStorage.length; i++){
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
					<span class=\"prix-valeur\" data-prix=\""+article.oArticlePrixValeur+"\">"+article.oArticlePrixValeur+"</span>\n\
					<span class=\"prix-unite\">"+article.oArticlePrixUnite+"</span>\n\
				</section>\n\
				<section class=\"categorie\">"+article.oArticelCategorie+"</section>\n\
				<button type=\"button\" class=\"close\">&times;</button>\n\
				<div class=\"btn-group qantity\">\n\
					<button type=\"button\" class=\"btn btn-default up\"><span class=\"glyphicon glyphicon-chevron-up\"></span></button>\n\
					<button type=\"button\" class=\"btn btn-default quantityval\">1</button>\n\
					<button type=\"button\" class=\"btn btn-default down\"><span class=\"glyphicon glyphicon-chevron-down\"></span></button>\n\
				</div>\n\
			</article>").appendTo( ".panier" );
			totalM += parseFloat(article.oArticlePrixValeur);
			
	  }
	  $("#montantotal").html(totalM.toFixed(2));
	  //$( ".qantity" ).on( "click", _montanTotal );
	  $(".close").on("click", _suprimerArticle);
	  $(".up").on("click", _ajouterQuantity);
	  $(".down").on("click", _suprimerQuantity);

	  
	  //Panier.montanTotal();
	}
	//suprime un article
	var _suprimerArticle = function(){
		$( this ).parent().remove();
		var idArticle = $(this).parent().attr("id");
		//localStorage.removeItem(idArticle);
		_montanTotal();
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

	var _updateArticlesLocalStorage = function(el) {
		
		//console.log("este");
		var articleID = el;
		var articelNom = $( "#"+articleID+" .nom" ).text();
		var articelDescription = $( "#"+articleID+" .description" ).text();
		var articelImage = $( "#"+articleID+" .artimg" ).attr( "src" );
		var articelCategorie =  $( "#"+articleID+" .categorie" ).text();
		var articlePrixValeurDef =  $( "#"+articleID+" .prix-valeur" ).attr("data-prix");
		var articlePrixValeur =  $( "#"+articleID+" .prix-valeur" ).text();
		var articlePrixUnite =  $( "#"+articleID+" .prix-unite" ).text();

		console.log(articleID+" / "+ articelNom+" / "+ articelDescription+" / "+ articelCategorie+" / "+ articlePrixValeurDef+" / "+ articlePrixValeur+" / "+articlePrixUnite+" / "+articelImage);
	}

	//return le methde publique
	return {
		getArticlesLocalStorage: 	_getArticlesLocalStorage,
		montanTotal:				_montanTotal
	}
}());