<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<title>Oikik Hosting Ltd.</title>
	<link rel="stylesheet" href="style-min/main.min.css">
	<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto+Slab:400,700|Ubuntu:400,700">
	<link rel="shortcut icon" type="image/png" href="img/favicon/fav-1.png" class="favicon">
</head>
<body id="orange">
<header>
	<nav class="navbar top-most-menu">
		<div class="container">
			<div class="navbar-header logo"><a href="//oikik.io" class="navbar-brand"><img src="img/logo/logo-1.png"></a></div>
			<div class="text-center">
				<ul class="nav navbar-nav navbar-right">
					<li class="text-capitalize"><a href="contact.php">Contact</a></li>
					<li class="text-capitalize"><a href="login.html">login</a></li>
					<li class="text-capitalize"><a href="tel:+88017235941615" class="call-phone">Call Us</a></li>
				</ul>
			</div>
		</div>
	</nav>
	<nav class="navbar navbar-default">
		<div class="container">
			<div class="navbar-header">
				<button type="button" data-toggle="collapse" data-target="#main-menu" aria-expanded="false" class="navbar-toggle collapsed"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
				</button>
			</div>
			<div id="main-menu" class="collapse navbar-collapse text-center">
				<ul class="nav navbar-nav text-uppercase">
					<li class="active"><a href="//oikik.io#banner" class="transition">home</a></li>
					<li><a href="//oikik.io#small-pricing" class="transition">plan</a></li>
					<li><a href="//oikik.io#features" class="transition">features</a></li>
					<li><a href="//oikik.io#service" class="transition">service</a></li>
					<li><a href="//oikik.io#detailed-plan" class="transition">buy</a></li>
					<li><a href="//oikik.io#site-migration" class="transition">benefits</a></li>
				</ul>
			</div>
		</div>
	</nav>
</header>


<section id="contact">
	<div class="container">
		<div class="heading text-left">
			<h1 class="text-uppercase">Contact us</h1>
			<p>Please send us your thought and stay connected with us</p>
		</div>
		<div class="row">
			<div class="col-md-7">
				<div class="form-wrapper">


					<?php if (!empty($_POST)): ?>
						Thank You, Mr/Ms <?php echo htmlspecialchars($_POST["name"]); ?>!<br>

						<?php
						$name = $_POST["message"];
						$email = $_POST["email"];
						$message = $_POST["message"];
						$info = [
							'name'=>$name,
							'email'=> $email,
							'message'=> $message
						];

						$filename = __DIR__.'/contact_requests.txt';
						file_put_contents( $filename, "\n".json_encode( $info), FILE_APPEND | LOCK_EX);
						
						?>

					<?php else: ?>


					<form action="" method="post">
						<div class="form-group">
							<input id="name" type="text" placeholder="Your Name" name="name" class="form-control">
						</div>
						<div class="form-group">
							<input id="email" type="email" placeholder="Your E-mail" name="email" class="form-control">
						</div>
						<div class="form-group">
							<textarea id="msg" type="text" placeholder="Enter your message" name="message" class="form-control"></textarea>
						</div>
						<input type="submit" value="Submit" class="btn">
					</form>


					<?php endif; ?>


				</div>
			</div>
			<div class="col-md-5">
				<div class="address text-right">
					<h3>Address</h3>
					<p>32/1, Mirpur Road, Khan Plaza</p>
					<p>(4th floor, South side)</p>
					<p>Dhanmondi, Dhaka</p>
					<p>tel:+88017235941615</p>
				</div>
			</div>
		</div>
	</div>
</section>
<footer>
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<div class="copyright text-center">
					<p> All rights reserved to&nbsp<span>copyright © 2017&nbsp<a href="mailto:contact@oikik.io" class="text-uppercase">oikik hosting</a></span></p>
				</div>
			</div>
			<div class="col-md-6 text-center">
				<ul class="nav">
					<li><a href="www.fb.com/oikik" class="transition"><i class="fa fa-facebook"></i></a></li>
					<li><a href="skype:buno047?call" class="transition"><i class="fa fa-skype"></i></a></li>
				</ul>
			</div>
		</div>
	</div>
</footer>
<script src="scripts/scripts.min.js"></script>
</body>
</html>