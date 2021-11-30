import { ref, computed } from 'vue';
//import { store } from "@/store";
import { useRouter } from 'vue-router';
export default function () {
	const ug = ref(navigator.userAgent);
	let isM = ref(true);
	const checkM = computed(() => isM.value);
	//const router = useRouter();
	const currentRoute = computed(() => {
		return useRouter().currentRoute.value;
	});
	function chkDevice() {
		const userAgent = navigator.userAgent.toLowerCase();
		var isMobile = /iPhone|Android/i.test(navigator.userAgent);
		const isTablet =
			/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
				userAgent
			);
		if (isMobile) {
			console.log('isMobile');
		} else if (isTablet) {
			console.log('isTablet');
		} else {
			console.log('pc');
		}
		/*
    if (isMobile) {
      store.dispatch("setDevice", 0);  
    } else if (isTablet) {
      store.dispatch("setDevice", 1);  
    } else {
      store.dispatch("setDevice", 2);  
    } 
    */
	}
	function isIpadPro() {
		var ratio = window.devicePixelRatio || 1;
		var screen = {
			width: window.screen.width * ratio,
			height: window.screen.height * ratio,
		};
		return (
			(screen.width === 2048 && screen.height === 2732) ||
			(screen.width === 2732 && screen.height === 2048) ||
			(screen.width === 1536 && screen.height === 2048) ||
			(screen.width === 2048 && screen.height === 1536)
		);
	}
	function setM(val) {
		isM.value = val;
		console.log('_setM=>' + isM.value);
		return;
	}
	function getCookie(cname) {
		var name = cname + '=';
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return '';
	}
	return {
		ug,
		checkM,
		setM,
		chkDevice,
		isIpadPro,
		getCookie,
        currentRoute
	};
}
