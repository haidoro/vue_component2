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

var counterButton = Vue.extend({
    template:'<div><h2>Add Number</h2><button v-on:click="addToNumber">Add Number</button></div>',
    data:function(){
        return{
            counter:0
        }
    },
    methods:{
        addToNumber: function(){
            this.counter += 1
            this.$emit('increment')
        }
    }
})

var app = new Vue({
    el:'#app',
    components:{
        'counter-button':counterButton
    },
	data:{
        total:0,
		foods: [{
		    name: 'ロボット用赤まむしドリンク'
		}, {
		    name: 'ロボット用緑色のニッキ玉'
		}, {
		    name: 'ロボット用六法焼うぐいすあん'
		}]
    },
    methods:{
        incrementStatus:function(){
            this.total += 1
        }
    }
})