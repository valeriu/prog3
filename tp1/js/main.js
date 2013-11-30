$(function(){
// Produit vignette / liste
$("#vignette").click(function(ev){
	ev.preventDefault();
	$("#allproducts").removeClass("liste");
	$("#allproducts").addClass("vignette");
	$("#liste").removeClass("active");
	$("#vignette").addClass("active");
});
$("#liste").click(function(ev){
	ev.preventDefault();
	$("#allproducts").removeClass("vignette");
	$("#allproducts").addClass("liste");
	$("#vignette").removeClass("active");
	$("#liste").addClass("active");
});

	//paginare

	 var number_of_items = $('#allproducts').children().size();
	console.log(number_of_items);
});
