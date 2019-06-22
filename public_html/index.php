<html id="app">
<head>
	<meta charset="utf-8">
	<title>{{title}}</title>
	<link rel="stylesheet" type="text/css" href="lib/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/app.css">
</head>
<body>
	<nav-bar :title="title" :page="page"></nav-bar>
	<div class="container theme-showcase" role="main">
		<jumbo-tron></jumbo-tron>

		<product-add v-if="page == 'addproduct'"></product-add>
		<product-list v-if="page == 'products'"></product-list>

		<product v-if="page == 'product'" :item="currentProduct"></product>

		<div class="index-page-content" v-if="page == 'index'">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</div>
	</div>
</body>
</html>

<script type="text/javascript" src="lib/vue.min.js"></script>
<script type="text/javascript" src="lib/jQuery/jquery.js"></script>
<script type="text/javascript" src="lib/vue-resource.min.js"></script>
<script type="text/javascript" src="js/navBar.js"></script>
<script type="text/javascript" src="js/jomboTron.js"></script>
<script type="text/javascript" src="js/productThumbnail.js"></script>
<script type="text/javascript" src="js/pagination.js"></script>
<script type="text/javascript" src="js/productList.js"></script>
<script type="text/javascript" src="js/product.js"></script>
<script type="text/javascript" src="js/addproduct.js"></script>
<script type="text/javascript" src="js/app.js"></script>