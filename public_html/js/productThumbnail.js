var template_productTumbnail = `
<div class="col-sm-6 col-md-4">
	<div class="thumbnail">
		<img src="{{item.thumbnail}}" style="height: 200px; width: 100%; display: block;">
		<div class="caption">
			<h3>{{item.name}}</h3>
			<p>{{item.info}}</p>
			قیمت: <b>{{item.price}}</b>
		</div>
	</div>
</div>`;

var ProductThumbnail = Vue.extend({
	template: template_productTumbnail,
	data: function(){
		return {};
	},
	props:{
		item:{
			type: Object,
			required: true
		}
	}
});