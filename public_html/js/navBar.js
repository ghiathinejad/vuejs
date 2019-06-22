var template_navBar = `
<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">{{title}}</a>
    </div>
    <div id="navbar" class="navbar-collapse collapse">
      <ul class="nav navbar-nav">
        <li v-for="item in menus | filterBy true 'show'" class="{{item.href == page ? 'active' : ''}}"><a @click.prevent="openMenu(item, $event)" href="{{item.href}}">{{item.caption}}</a></li>
      </ul>
    </div><!--/.nav-collapse -->
  </div>
</nav>`;

var NavBar = Vue.extend({
	template: template_navBar,
	props:{
		title:{
			type: String,
			default: 'Project Name'
		},
    page: {
      type: String,
      default: 'index'
    }
	},
	data: function(){
		return {
			menus: [
        {href: 'index', caption: 'خانه', show: true},
				{href: 'product', caption: 'اطلاعات محصول', show: false},
        {href: 'products', caption: 'محصولات', show: true},
				{href: 'addproduct', caption: 'افزودن محصول جدید', show: true},
			],
		}
	},
  methods:{
    openMenu: function(item, e){
      this.$dispatch('menu-change', item.href, item);
    }
  }
});