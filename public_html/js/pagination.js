var template_Pagination = `
  <ul class="pagination">
    <li class="disabled">
      <a href="#" @click.prevent="changePage(0)" aria-label="Previous"><span aria-hidden="true">»</span></a>
    </li>
    
    <li v-for="item in list2" class="{{currentpage == $index ? 'active' : ''}}">
      <a href="#" @click.prevent="changePage($index)">{{$index+1}}</span></a>
    </li>

    <li>
      <a href="#" @click.prevent="changePage(pagecount-1)" aria-label="Next"><span aria-hidden="true">«</span></a>
    </li>
  </ul>
`;

var Pagination = Vue.extend({
	template: template_Pagination,
	props:{
    list:{},
    pagesize: {
      type: Number,
      coerce: function(val){
        return parseInt(val);
      }
    },
    itemsfrom: {
      type: Number,
      twoWay:true,
      coerce: function(val){
        return parseInt(val);
      }
    }
	},
	data: function(){
		return {
      currentpage: 0
		}
	},
  computed:{
    list2: function(){
      var items = this.list.slice(0, this.pagecount+1);
      return items;
    },
    pagecount: function(){
      return parseInt(this.list.length/this.pagesize);
    }
  },
  methods:{
    changePage: function(page){
      this.currentpage = page;
      this.itemsfrom = page * this.pagesize;
    }
  }
});