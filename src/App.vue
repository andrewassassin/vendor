<template>
	<div class="nav">

	</div>
	<router-view />
</template>

<script>
// import Navbar from '@/components/Navbar';
import {
	//computed,
	onMounted,
	//onBeforeUpdate,
	//onUpdated,
	//onBeforeUnmount,
	//onUnmounted,
	//onErrorCaptured,
	//onRenderTracked,
	//onRenderTriggered,
	//onActivated,
	//onDeactivated,
} from 'vue';
import globalFunc from '@/globalFunc';
import { useStore } from 'vuex';
export default {
	components: {

	},
	setup() {
		const { chkDevice,currentRoute } = globalFunc();
		const { commit } = useStore();
		onMounted(() => {
			//console.log("onMounted!");
			chkDevice();
		});
		commit({
			type: 'changeLang',
			lang: 'tw',
		});
	

		return {  currentRoute };
	},
};
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}

body {
	margin: 0;
}

.nav{
	position: fixed;
	left: 0;
	top: 0;
	z-index: 999;
}

// .nav {
// 	padding: 0;
// 	position: fixed;
// 	width: 100vw;
// 	left: 0;
// 	top: 0;
// 	height: 90px;
// 	z-index: 30;
// 	a {
// 		font-weight: bold;
// 		color: #2c3e50;
// 		margin-right: 10px;

// 		&.router-link-exact-active {
// 			color: #42b983;
// 		}
// 	}
// }

// .p-menubar {
// 	position: relative;
// 	z-index: 30;
// }

// @media (max-width: 600px) {
// 	.nav {
// 		width: 100vw;
// 	}
// }
</style>
