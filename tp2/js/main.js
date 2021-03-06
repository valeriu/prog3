$(function(){
	// Produit vignette / liste
	$("#vignette").click(function(ev){
		ev.preventDefault();
		$("#allproducts").removeClass("liste").addClass("vignette");
		$("#liste").removeClass("active");
		$("#vignette").addClass("active");
	});
	$("#liste").click(function(ev){
		ev.preventDefault();
		$("#allproducts").removeClass("vignette").addClass("liste");
		$("#vignette").removeClass("active");
		$("#liste").addClass("active");
	});
	//change article per page 
	$("#perpageselect").change(function(){
		var newPerPage = parseInt( $(this).val() );
		//console.log(newPerPage);
		Articles.getArticles(0,newPerPage,0);
	});	

});

var Articles = (function() {
	var articlePerPage = 12;
	//get articles from jmartel.webdev.cmaisonneuve.qc.ca
	var _getArticles = function(vindex, vnombre, vsleep) {
		var url = "http://jmartel.webdev.cmaisonneuve.qc.ca/582-853/produit/ajaxProduits.php?";
		$( "#allproducts" ).empty();
		$(".bubblingG").show("always");
		var req = $.ajax({ 
			dataType: "json",
			url: url, 
			data: {
				requete: "produits",
				index: vindex,
				nombre: vnombre, 
				sleep: vsleep,
				timeout: 500} //timeout si le server ne respond pas (404)
			});
		req.done(function( data ) {
			$.each( data, function(i, item ) {
				$( "<article class=\"produit\"><header class=\"nom\">"+data[i]["nom"]+"</header><section class=\"image\"><img src=\""+data[i]["image"]+"\"></section><section class=\"description\">"+data[i]["description"]+"</section><section class=\"prix\"><span class=\"prix-valeur glyphicon glyphicon-shopping-cart\">"+data[i]["prix"]["valeur"]+"</span><span class=\"prix-unite\">"+data[i]["prix"]["unite"]+"</span></section><section class=\"categorie\">"+data[i]["categorie"]+"</section></article>").appendTo( "#allproducts" );
			});
			Articles.setPagesNav(vnombre);
			$(".bubblingG").hide();
		});
		req.fail(function () {
			$("#allproducts").empty();
			$(".bubblingG").hide();
			$(".page").hide();
			$("<div class='error'><h1>Error</h1><h2>Serveur n'a pas pu répondre à la demande</h2>").appendTo( "#allproducts" );
		});
		setTimeout(function() {
			//use abort() : http://stackoverflow.com/a/13258834
			// si le temp d'etendre et > de 5 sec, fermez la conection et affiche fail()
			req.abort();
		}, 5000);

	};
	// page nombers
	var _setPagesNav = function (perPage){
		var url = "http://jmartel.webdev.cmaisonneuve.qc.ca/582-853/produit/ajaxProduits.php?requete=nombreProduits";
		$.ajax({
				url: url
			})
		.done(function( html ) {
			var ii = Math.ceil(html/perPage);
			$( ".page" ).empty();
			$( "#perpageselect [label='all']" ).remove();
			$("#perpageselect").append("<option label=\"all\" value='"+html+"'>All</option>");	
			var ulli = "<ul class='pagination'>";
				for (var i = 1, j=perPage; i <= ii; i++, j+=perPage) {
					ulli += "<li><a rel='"+j+"'>"+i+"</a></li>";
				};
			ulli += "</ul>"
			$(".page").append( ulli);

			//add pagination
			$(".pagination > li > a[rel]").click(function(){
					var endArticle = $(this).attr("rel");
					var startArticle = endArticle - perPage;
					//console.log(startArticle+"/"+endArticle);
					Articles.getArticles(startArticle,perPage,0);		
				})

		});
	}
	//return le methde publique
	return {
		getArticles: 		_getArticles,
		setPagesNav: 		_setPagesNav
	}
}());