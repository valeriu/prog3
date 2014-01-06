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

	//Affiche Panier avec JS (a voir js/panier.js)
	public function affichePanier() { 	?>
		<!-- Produits -->
			<div class="panier"></div>
		<!-- /Produits -->  
		<div class="total">Montant total : <span id="montantotal"></span></div>
		<div><a type="button" class="btn btn-success" href="index.php?requete=commande">Passer la commande</a></div>	
	<?php 	}

	//Afficher Erreur si requete n'existe pas
	public function affichePanierError() { 	?>
			<div class="paniererror">
				<h2>Erreur 404 - requete n'existe pas</h2>
				<h3><a href="../tp3.html">Afficher la première page</a></h3>
			</div>
	<?php 	}


	//Affiche <form> Passer la commande
	public function affichePasserCommande() { 	?>
	  <!-- Passer la commande -->
		<div class="affichePasserCommande">
		<h1>Passer Commande</h1>
		<div id="passer">
			<form role="form">
				<div class="form-group">
					<label for="Courriel">Courriel</label>
					<input type="email" class="form-control" id="Courriel" placeholder="Enter email">
				</div>
				<div class="form-group">
					<label for="Adresse">Adresse</label>
					<textarea class="form-control" rows="3" id="Adresse"  placeholder="Enter adresse"></textarea>
				</div>
				<button type="button" class="btn btn-default" id="passerCommande">Confirm</button>
			</form>
		</div>
			<script>
				$(function() {
					$(".cartitem").html("<li></li>");
				});
			</script>
		</div>
	<?php 	}	


	//Affiche <form> verifier adresse courriel
	public function afficheListeCommande() { ?>
		<div class="afficheListeCommande">
		<h1>Liste Commande</h1>
		<div id="passer">
			<div role="form">
				<div class="form-group">
					<label for="Courriel">Votre Courriel</label>
					<input type="email" class="form-control" id="Courriel" placeholder="Enter email">
				</div>
				<button type="button" class="btn btn-default" id="visualiserCommande">Visualiser les commandes</button>
			</div>
		</div>
		<script>
			$(function() {
				$(".cartitem").html("<li></li>");
			});
		</script>
		</div>
	<?php 	}

	//Affiche error si adresse courriel n'existe pas
	public function afficheListeCommandeE($email) { ?>
		<div class="afficheListeCommande">
		<h1>Liste Commande</h1>
		<div id="passer">
			<div class="alert alert-danger">Adresse e-mail <strong><?php echo $email; ?></strong> n'existe pas dans notre base de donnees</div>	
			<div class="try">
				<a type="button" href="index.php?requete=listecommande" class="btn btn-danger" id="visualiserCommande">Essayez une adresse différente</a>
			</div>
		</div>
		<script>
			$(function() {
				$(".cartitem").html("<li></li>");
				var _emailverify = function() {
						console.log("visualiserCommande din viu");
						var useremail =  $("#Courriel").val();
						$(".afficheListeCommande").load( "ajaxControler.php?types=emailverify&email="+useremail);
				}
				$("#visualiserCommande").on("click", _emailverify);
			});
		</script>
		</div>
	<?php 	}

	//Affiche la liste des commandes
	public function afficheListeCommandeOK($email, $reponse) { ?>
		<div class="afficheListeCommande">
		<h1>Liste Commande</h1>
		<div id="passer">
			<h2>Adresse e-mail <strong><?php echo $email; ?></strong></h2>
			<div class="panier">
			<?php 
				//print_r($reponse)
				for($i = 0; $i < count($reponse); $i++){
					echo "<div class=\"reponse\"><div>";
						echo "<div class=\"reponse-date text-primary\">Date : <strong>{$reponse[$i]['date']}</strong></div>";
						echo "<div class=\"reponse-total text-primary\">Total : <strong>{$reponse[$i]['total']}</strong></div>";
						echo "<div class=\"reponse-detail\"><button id=\"detail-{$i}\" type=\"button\" class=\"btn btn-info quantityval\">Details</button></div><div class=\"clear\"></div></div>";
						echo "<div class=\"reponse-details\" id=\"details-{$i}\">{$reponse[$i]['produis']}</div>";
						echo '<script>$(function(){$("#detail-'.$i.'").click(function(){ $("#details-'.$i.'").toggle(); });});</script>';
					echo "</div>";
				}
			?>
			</div>
		</div>
		<script>$(function() {$(".cartitem").html("<li></li>");});</script>
		</div>
	<?php 	}

}
?>