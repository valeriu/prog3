<?php
/**
 * Class Vue
 * Template de classe Vue. Dupliquer et modifier pour votre usage.
 * 
 * @author Jonathan Martel
 * @version 1.0
 * @update 2013-12-11
 * @license Creative Commons BY-NC 3.0 (Licence Creative Commons Attribution - Pas d’utilisation commerciale 3.0 non transposé)
 * @license http://creativecommons.org/licenses/by-nc/3.0/deed.fr
 * 
 */


class Vue {

	/**
	 * Affiche la page d'accueil 
	 * @access public
	 * 
	 */
	public function afficheAccueil() { 	?>
	  <!-- Produits -->
	  <div class="panier">
		  
		  	<script src="../js/panier.js"></script>
			<script>
				$(function() {
					Panier.getArticlesLocalStorage();
				});
			
			</script>
	  </div><!-- /Produits -->  
	<div class="total">Montant total : <span id="montantotal">55</span></div>	
	<?php 	}
	

}
?>
