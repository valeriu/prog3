$(function(){

// Produit vignette / liste
// 
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

//added shopping cart
$(".prix-valeur").addClass("glyphicon glyphicon-shopping-cart");

//ajoute tous produits (option)
$("#perpageselect").append("<option value='"+ $('#allproducts').children().size()+"'>Tous ("+ $('#allproducts').children().size()+")</option>")	
/*
	//paginare
	//inspiration
	//https://github.com/codrops/SliderPagination/blob/master/js/jquery.pagination.js
	//https://github.com/aliaspooryorik/jquery.paginate/blob/master/jquery.paginate.js
*/
$.fn.ArticlePaginator = function(options) {
	//variable 
	var defaults = {
		articlePerPage: 12,
		pageCourante: 1
	};
	//fusionner contenu de deux objets
	var options = $.extend(defaults, options);

	return this.each(function() {

		var elCurent = $(this);	
		var startPage = 1;
		
		//http://stackoverflow.com/questions/306583/this-selector-and-children
		elCurent.children().each(function(i){ 
				
			if(i < startPage*options.articlePerPage && i >= (startPage-1)*options.articlePerPage) {
				$(this).addClass("articlepage"+startPage);
			} else {
				$(this).addClass("articlepage"+(startPage+1));
				startPage ++;
			}	
			
		});
		
		// afficher / masquer les articles
		elCurent.children().hide();
		elCurent.children(".articlepage"+options.pageCourante).show();
		
		if(startPage <= 1) { return; }
		
		//Construire navigation 
		var createNavigation = "<ul class='pagination'>";	
		for (i=1; i<=startPage; i++) {
			if (i == options.pageCourante) {
				createNavigation += "<li class='pageCourante lipagnr"+i+"'><a rel='"+i+"' href='#'>"+i+"</a></li>";	
			} else {
				createNavigation += "<li class='lipagnr"+i+"'><a rel='"+i+"' href='#'>"+i+"</a></li>";
			}
		}
		createNavigation += "</ul>";
		
		$(".page").prepend(createNavigation);

		
		//comportement de navigation de pager
		elCurent.parent().find(".pagination a").click(function() {
				
			//chercher rel attribute pour connaitre page
			var clickedLink = $(this).attr("rel");
			options.pageCourante = clickedLink;
			
			$(this).parent("li").parent(".pagination").find("li.pageCourante").removeClass("pageCourante");
			$(this).parent("li").parent(".pagination").find("a[rel='"+clickedLink+"']").parent("li").addClass("pageCourante");			

			//masquer et afficher de lien
			elCurent.children().hide();			
			elCurent.find(".articlepage"+clickedLink).show();
			
			return false;
			});
		});
	}	

	// lancement le script
	$("#allproducts").ArticlePaginator({articlePerPage:12});
	//changement de pagination en fonction du nombre de produits
	$("#perpageselect").change(function(){
		var newPerPage = parseInt( $(this).val() );
		//console.log(newPerPage);
		$(".pagination").remove();
		$("#allproducts").ArticlePaginator({articlePerPage:newPerPage});
	});
	//Ajouter des liens NEXT et PREV
	//TODO: bug lorsque on change nr de produit
	var lastlink = '<li><a id="nextpage" href="#">&raquo;</a></li>';
	var fristlink = '<li><a id="prevpage" href="#">&laquo;</a></li>';
	$(".pagination").prepend(fristlink).append(lastlink);
	$("#nextpage").click(function(e) {
		e.preventDefault();
		$("li.pageCourante").next("li[class^=lipagnr]").find("a").click();
		//console.log("nextpage");
	});
	$("#prevpage").click(function(e) {
		e.preventDefault();
		$("li.pageCourante").prev("li[class^=lipagnr]").find("a").click();
	});
});

