Vue.component('best-food-title', {
	template: '<h1>好きな食べ物</h1>'
})
Vue.component('best-food-description', {
	template: '<p>DogRoboの好きな食べ物の紹介です。</p>'
})
Vue.component('best-food', {
	props:{
		foodName:{
			type:String,
			required:true
		}
	},
	template:'<p>{{ foodName }}</p>'
})
var app = new Vue({
	el:'#app',
	data: {
	    name: 'ロボット用RedBull'
	}
})