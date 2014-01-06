<?php
/**
 * Class Modele
 * Template de classe modèle. Dupliquer et modifier pour votre usage.
 * 
 * @author Jonathan Martel
 * @version 1.0
 * @update 2013-12-11
 * @license Creative Commons BY-NC 3.0 (Licence Creative Commons Attribution - Pas d’utilisation commerciale 3.0 non transposé)
 * @license http://creativecommons.org/licenses/by-nc/3.0/deed.fr
 * 
 */
class Modele {
	
    //Connexion à la base
	function bdconnect() {
		// Data base config
		$dsn = "mysql:host=localhost;dbname=ex07";
		$user = "root";
		$pass = "";

		$id = new PDO($dsn, $user, $pass);
		$id->exec('SET NAMES UTF8');
		return $id;
	}
	
	// Enregistrer les données dans la base de données
	public function setCommande($email, $data, $produitbd, $total){
		$id = $this->bdconnect();
		 
		$req = "INSERT INTO panier (email, date, produis, total) VALUES ('".$email."', '".$data."', '".$produitbd."', '".$total."')";
		$done = $id->exec($req);
		return $req;
	}

	//Renvoie des informations sur les produits de base de données
	public function getListProduis($email){
		$id = $this->bdconnect();

		$req = $id->query("SELECT * FROM panier WHERE email = '".$email."' ORDER BY date DESC");
		$result = $req->fetchAll(PDO::FETCH_ASSOC);

		return $result;
	}

}

?>