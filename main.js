Vue.component('fruits-list-title',{
	template:'<h1>フルーツ一覧</h1>'
})
Vue.component('fruits-list-description',{
	template:'<p>季節の代表的なフルーツの一覧です。</p>'
})
Vue.component('fruits-item',{
	props:{
		fruitsName:{
			type:String,
			required:true
		}
	},
	template:'<p>{{ fruitsName }}</p>'
})
var app = new Vue({
	el:'#app',
	data:{fruit:'りんご'}
})