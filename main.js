Vue.component('best-food-title', {
    template: '<h1>好きな食べ物</h1>'
})
Vue.component('best-food-description', {
    template: '<p>DogRoboの好きな食べ物の紹介です。</p>'
})
Vue.component('best-food-item', {
	props:{
		foodName: {
			type:Object,
			required:true
		}
	},
	template: '<li>{{ foodName.name }}</li>'
})
var app = new Vue({
	el:'#app',
	data:{
		foods: [{
		    name: 'ロボット用赤まむしドリンク'
		}, {
		    name: 'ロボット用緑色のニッキ玉'
		}, {
		    name: 'ロボット用六法焼うぐいすあん'
		}]
	}
})