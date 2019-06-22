var routes = {
	'productlist': 'backend/productlist.php'
};

var vm = new Vue({
	el: '#app',
	data:{
		page: 'index',
		title: 'Market Place',
		currentProduct: null
	},
	components:{
		'nav-bar': NavBar,
		'jumbo-tron': JumboTron,
		'product-list': ProductList,
		'product': Product,
		'product-add': addProduct
	},
	events:{
		'menu-change': function(href){
			this.page = href;
			if(href=='product'){
				this.currentProduct = arguments[1];
			}
		}
	}
});