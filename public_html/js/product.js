var template_product= `<div class="product">
	<img src="{{item.thumbnail}}">
	<div>
		<h2>{{item.name}}</h2>
		<p>{{item.info}}</p>
		<div>قیمت: <b>{{item.price}}</b></div>
	</div>
</div>`;

var Product = Vue.extend({
	template: template_product,
	data: function(){
		return {

		};
	},
	props:{
		item:{
			type: Object
		}
	},
	components:{},
	created: function(){
	},
	methods:{
	}
});