var template_addproduct= `<div class="addproduct row">
	<p class="col-md-4">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
	<form method="post" action="/backend/addproduct.php" enctype="multipart/form-data" class="col-md-8">
		<div class="form-group {{name.trim()=='' ? 'has-error' : ''}}">
			<label>نام محصول:</label><input name="name" class="form-control" v-model="name">
		</div>
		<div class="form-group {{info.trim()=='' ? 'has-error' : ''}}">
			<label>توضیحات:</label><textarea name="info" class="form-control" v-model="info"></textarea>
		</div>
		<div class="form-group {{price.trim()=='' || isNaN(parseFloat(price)) || parseFloat(price) > 10000000 || parseFloat(price) < 0 ? 'has-error' : ''}}">
			<label>قیمت:</label><input name="price" class="form-control" v-model="price">
		</div>
		<div class="form-group">
			<label>قیمت:</label><input name="file" class="form-control" type="file">
		</div>
		<button @click.prevent="submitData" class="btn btn-success">ایجاد</button>
	</form>
</div>`;

var addProduct = Vue.extend({
	template: template_addproduct,
	data: function(){
		return {
			name: '',
			info: '',
			price: 0,
		};
	},
	props:{},
	components:{},
	created: function(){
	},
	methods:{
		submitData: function(e){
			var form = $(e.target).parents('form');
			var haserror = form.find('.has-error').length;
			if(haserror){
				alert('اطلاعات وارد شده را بررسی نمایید و مجددا تلاش نمایید!');
			}
			else{
				form.submit();
			}
		}
	}
});