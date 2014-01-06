<?php
/**
 * Class Controler
 * Gère les requêtes HTTP
 * 
 * @author Jonathan Martel
 * @version 1.0
 * @update 2013-12-10
 * @license Creative Commons BY-NC 3.0 (Licence Creative Commons Attribution - Pas d’utilisation commerciale 3.0 non transposé)
 * @license http://creativecommons.org/licenses/by-nc/3.0/deed.fr
 * 
 */

class Controler 
{
	
		/**
		 * Traite la requête
		 * @return void
		 */
		public function gerer() {
			
			switch ($_GET['requete']) {
				case 'panier':
					$this->panier();
					break;
				case 'listecommande':
					$this->listeCommande();
					break;
				case 'commande':
					$this->passerCommande();
					break;									
				default:
					$this->panierError();
					break;
			}
		}
		
		//Afficher panier
		private function panier() {
			$oVue = new Vue();
			$oVue->affichePanier();
		}

		//Afficher verification email (form)
		private function listeCommande() {
			$oVue = new Vue();
			$oVue->afficheListeCommande();
		}

		//Afficher Passer Commande (ajoute au BD)
		private function passerCommande() {
			$oVue = new Vue();
			$oVue->affichePasserCommande();
		}	
		//Afficher panier
		private function panierError() {
			$oVue = new Vue();
			$oVue->affichePanierError();
		}
}
?>