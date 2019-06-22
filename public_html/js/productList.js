var template_productList= `<div class="bs-example" data-example-id="thumbnails-with-custom-content">
<div class="row">
	<product-thumbnail v-for="item in list2" :item="item" @click="showProduct(item)"></product-thumbnail>
	<div class="clearfix"></div>
	<pagination :list="list" :pagesize="itemsToShow" :itemsfrom.sync="itemsFrom"></pagination>
</div>`;

var ProductList = Vue.extend({
	template: template_productList,
	data: function(){
		return {
			list: [],
			itemsFrom: 0,
			itemsToShow: 3
		};
	},
	props:{

	},
	computed:{
		list2: function(){
			return this.list.slice(this.itemsFrom, this.itemsFrom + this.itemsToShow);
		}
	},
	components:{
		'product-thumbnail': ProductThumbnail,
		'pagination': Pagination
	},
	created: function(){
		this.$http(routes.productlist).then(this.success, this.fail);
	},
	methods:{
		success: function(response){
			this.list = response.data;
		},
		fail: function(response){
			console.log(response);
		},
		showProduct: function(item){
			this.$dispatch('menu-change', 'product', item);
		}
	}
});