Vue.component('fruits-list-title',{
	template:'<h1>フルーツ一覧</h1>'
})
Vue.component('fruits-list-description',{
	template:'<p>季節の代表的なフルーツの一覧です。</p>'
})
Vue.component('fruits-list-item',{
	data:function(){
		return{
			fruits : ['りんご','みかん','梨']
			}
	},
	template:'<ul><li v-for="fruit in fruits">{{ fruit }}</li></ul>'
})
var app = new Vue({
	el:'#app'

})