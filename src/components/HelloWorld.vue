<template>
	<div class="hello">
		<button @click="intoVenderCentral">進入</button>
	</div>
</template>

<script>
// import axios from 'axios';
import AddProduct from '../views/AddProduct.vue'
import { useRouter } from 'vue-router';
export default {
	name: 'HelloWorld',
	props: {
		msg: String,
	},
	setup() {
		const router = useRouter();
		function intoVenderCentral(){
			router.push({
				path: '/addProduct',
				component: AddProduct,
			});
		}
		return {intoVenderCentral}
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
