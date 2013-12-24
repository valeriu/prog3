<!DOCTYPE html>
<html>
  <head>
	<title>Shop Online</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- Bootstrap -->
	<link href="../css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" href="../css/bootstrap-theme.min.css">
	<link rel="stylesheet" href="../css/main.css">
	<!-- Google Web Fonts -->
	<link href='http://fonts.googleapis.com/css?family=Signika+Negative' rel='stylesheet' type='text/css'>
	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
 	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="https://code.jquery.com/jquery.js"></script>
	  <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
	  <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
	<![endif]-->
  </head>
  <body>
	<main class="container">
	  <header class="header">
		<!--Nav simple-->
		<ul class="nav nav-pills pull-right">
		  <li class="active"><a href="#">Home</a></li>
		  <li><a href="#">About</a></li>
		   <li><a href="#">Produits</a></li>
			<li><a href="#">Contact</a></li>
		  <li class="cartitem"><a class="btn-danger" href="panier/index.php"><span>0</span> Items</a></li>
		</ul>
		<!-- Tritre du site -->
		<h3 class="text-muted">Shop Online</h3>
	  </header>


	<body>
			<?php 		
				$oControleur = new Controler();	
				$oControleur->gerer();
				
			?>
			
  <!-- Ajouter pagination par programmation-->
	  <footer>
		<p>Source: Text description --> Casio Canada (http://fr.casioca.com/) Images -->  Casio Russian (http://www.casio-europe.com/ru/)</p>
	  </footer>
	</main>

	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="../js/bootstrap.min.js"></script>
  </body>
</html>
<!--
/*
582-862 – Programmation Internet III (Jonathan Martel)
Groupe : 1617 Pondération : 30 %
		
		Valeriu Tihai

Travail pratique 3
*/
-->