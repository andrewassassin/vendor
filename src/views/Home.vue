<template>
  <div class="home">
    <div class="p-md-12">
      <img  alt="Vue logo" src="../assets/logo.png">
    </div>
    <div class="p-col-12">
      <Button @click="intoVenderCentral" label="進入首頁" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import AddProduct from '../views/AddProduct.vue'
import { useRouter } from 'vue-router';
export default {
  name: 'Home',
  components: {

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
}
</script>
<style scoped>
.home{
  text-align: center;
  margin-top: 130px;
}
</style>
