<?php

/**
 * Controlleur AJAX. Ce fichier est la porte d'entrée des requêtes AJAX (XHR)
 * @author Jonathan Martel
 * @version 1.0
 * @update 2013-03-11
 * @license Creative Commons BY-NC 3.0 (Licence Creative Commons Attribution - Pas d’utilisation commerciale 3.0 non transposé)
 * @license http://creativecommons.org/licenses/by-nc/3.0/deed.fr
 * 
 */

	require_once("./config.php");
	
	

		switch ($_GET['types']) {
			case 'inser2bd':
				commande2bd();
				break;
			case 'emailverify':
				emailverify();
				break;
			default:
  				echo "Ne peuvent pas accéder directement à ce fichier";	
		}


	//Ajoute commande dans BD
	function commande2bd() {
		$email = $_GET['email'];
		$data = date("Y-m-d H:i:s");
		$produitbd = addslashes($_GET['produitbd']);
		$total = $_GET['total'];

		$oModele = new Modele();
		$reponse = $oModele->setCommande($email, $data, $produitbd, $total);

	}

	//Verifier adresse courriel
	function emailverify() {
		$email = $_GET['email'];

		$oModele = new Modele();
		$reponse = $oModele->getListProduis($email);
		$oVue = new Vue();
		
		if (count($reponse) > 0) {
			$oVue->afficheListeCommandeOK($email, $reponse);
		} else {
			$oVue->afficheListeCommandeE($email);
		}
		
	}
?>