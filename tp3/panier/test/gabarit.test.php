<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr">

	<head>

		<title>Test unitaire</title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	</head>

	<body>
		<div id="header">
			<h1>Test - getListProduis</h1>
		</div>
		<div id="contenu">
			<?php 
			function bdconnect() {
				// Data base config
				$dsn = "mysql:host=localhost;dbname=ex07";
				$user = "root";
				$pass = "";

				$id = new PDO($dsn, $user, $pass);
				$id->exec('SET NAMES UTF8');
				return $id;
			}
	
			$email = "valeriu@tihai.md";
			$data = date("Y-m-d H:i:s");
			$produitbd = "Produs";
			$total = "33,44";

			$oModele = new Modele();
			$reponse = $oModele->getListProduis($email);

			var_dump($reponse);

			$email2 = "sdssss";

			$oModele = new Modele();
			$reponse = $oModele->getListProduis($email2);

			//var_dump($reponse);
			
			echo "<hr><h1>Test - setCommande</h1>";
			$oModele = new Modele();
			$reponse = $oModele->setCommande($email, $data, $produitbd, $total);
			print_r($reponse);
		

			 ?>
		</div>
		<div id="footer">

		</div>
	</body>
</html>








