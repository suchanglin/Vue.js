import Vue from 'vue'
import Hello from './hello.vue'

new Vue({
	el: '#app',
	render: function (createElement) {
		return createElement(Hello);
	}
})