Vue.component('fruits-list-title',{
	template:'<h1>フルーツ一覧</h1>'
})
Vue.component('fruits-list-description',{
	template:'<p>季節の代表的なフルーツの一覧です。</p>'
})
Vue.component('fruits-list-item',{
	props:{
		fruitsList:{
			type:Object,
			required:true
		}
	},
	template:'<li>{{ fruitsList.name }}</li>'
})
var app = new Vue({
	el:'#app',
	data:{
		fruits : [{name:'りんご'},{name:'みかん'},{name:'梨'}]
	}
})