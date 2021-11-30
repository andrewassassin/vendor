<template>
	<div class="navbar-all">
		<div id="navBarTop">
			<i class="pi pi-apple"></i>
			<div class="nav-top">
				<ul class="nav-ul">
					<li class="nav-item">
						<router-link class="" to="/">{{ $t('__user') }}</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/">{{ $t('__notification') }}</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/">{{ $t('__help') }}</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/">{{ $t('__settings') }}</router-link>
					</li>
				</ul>
			</div>
		</div>
		<div>
			<Menubar :model="lists" class="nav-text">
				<template #end></template>
			</Menubar>
		</div>
	</div>
</template>
<script>
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';
import i18n from '@/plugins/i18n';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import AddPrdAmazon from '@/views/AddPrdAmazon.vue';
import PrdUpload from '@/views/PrdUpload.vue';
export default {
	setup() {
		const router = useRouter();
		const store = useStore();
		const { t } = useI18n();

		const lists = ref([
			{
				label: t('__add_products'),
				icon: 'pi pi-fw pi-user',
				items: [
					{
						label: 'Via Amazon',
						icon: 'pi pi-fw pi-user-plus',
						command: () => {
							router.push({
								path: '/addPrdAmazon',
								component: AddPrdAmazon,
							});
						},
					},
					{
						label: 'Via Ebay',
						icon: 'pi pi-fw pi-user-minus',
					},
					{
						label: 'Via upload',
						icon: 'pi pi-fw pi-user-minus',
						command: () => {
							router.push({
								path: '/prdUpload',
								component: PrdUpload,
							});
						},
					},
				],
			},
			{
				label: t('__inventory'),
				icon: 'pi pi-fw pi-pencil',
				items: [
					{
						label: 'Left',
						icon: 'pi pi-fw pi-align-left',
					},
					{
						label: 'Right',
						icon: 'pi pi-fw pi-align-right',
					},
					{
						label: 'Center',
						icon: 'pi pi-fw pi-align-center',
					},
				],
			},
			{
				label: t('__order'),
				icon: 'pi pi-fw pi-user',
				items: [
					{
						label: 'New',
						icon: 'pi pi-fw pi-user-plus',
					},
					{
						label: 'Delete',
						icon: 'pi pi-fw pi-user-minus',
					},
					{
						label: 'Search',
						icon: 'pi pi-fw pi-users',
					},
				],
			},
			{
				label: t('__payment'),
				icon: 'pi pi-fw pi-calendar',
				items: [
					{
						label: 'Edit',
						icon: 'pi pi-fw pi-pencil',
						items: [
							{
								label: 'Save',
								icon: 'pi pi-fw pi-calendar-plus',
							},
							{
								label: 'Delete',
								icon: 'pi pi-fw pi-calendar-minus',
							},
						],
					},
					{
						label: 'Archieve',
						icon: 'pi pi-fw pi-calendar-times',
						items: [
							{
								label: 'Remove',
								icon: 'pi pi-fw pi-calendar-minus',
							},
						],
					},
				],
			},
			{
				label: t('__marketing'),
				icon: 'pi pi-fw pi-user',
				items: [
					{
						label: 'New',
						icon: 'pi pi-fw pi-user-plus',
					},
					{
						label: 'Delete',
						icon: 'pi pi-fw pi-user-minus',
					},
				],
			},
			{
				label: t('__customer'),
				icon: 'pi pi-fw pi-user',
			},
			{
				label: t('__reports'),
				icon: 'pi pi-fw pi-user',
			},
			{
				label: t('__language'),
				icon: 'pi pi-fw pi-user',
				items: [
					{
						label: t('__english'),
						icon: 'pi pi-fw pi-user-plus',
						command: () => {
							store.commit('changeLang', { lang: 'en' });
							console.log('i18n', i18n.global.locale);
						},
					},
					{
						label: t('__traditional_chinese'),
						icon: 'pi pi-fw pi-user-minus',
						command: () => {
							store.commit('changeLang', { lang: 'tw' });
							console.log('i18n', i18n.global.locale);
						},
					},
				],
			},
			{
				label: t('__themes'),
				icon: 'pi pi-fw pi-pencil',
				items: [
					{
						label: 'Blue-Light',
						icon: 'pi pi-fw pi-pencil',
						command: () => {
							changeTheme('blue-light');
						},
					},
					{
						label: 'Blue-Dark',
						icon: 'pi pi-fw pi-pencil',
						command: () => {
							changeTheme('blue-dark');
						},
					},
					{
						label: 'Purple-Light',
						icon: 'pi pi-fw pi-pencil',
						command: () => {
							changeTheme('purple-light');
						},
					},
					{
						label: 'Mira',
						icon: 'pi pi-fw pi-pencil',
						command: () => {
							changeTheme('mira');
						},
					},
					{
						label: 'Nano',
						icon: 'pi pi-fw pi-pencil',
						command: () => {
							changeTheme('nano');
						},
					},
					{
						label: 'Lara-Teal',
						icon: 'pi pi-fw pi-pencil',
						command: () => {
							changeTheme('lara-light-teal');
						},
					},
					{
						label: 'Sega-Blue',
						icon: 'pi pi-fw pi-pencil',
						command: () => {
							changeTheme('sega-blue');
						},
					},
					{
						label: 'Sega-Orange',
						icon: 'pi pi-fw pi-pencil',
						command: () => {
							changeTheme('sega-orange');
						},
					},
					{
						label: 'Sega-Green',
						icon: 'pi pi-fw pi-pencil',
						command: () => {
							changeTheme('sega-green');
						},
					},
					{
						label: 'Tailwind-Light',
						icon: 'pi pi-fw pi-pencil',
						command: () => {
							changeTheme('tailwind-light');
						},
					},
					{
						label: 'Fluent-Light',
						icon: 'pi pi-fw pi-pencil',
						command: () => {
							changeTheme('fluent-light');
						},
					},
					{
						label: 'Indigo-Light',
						icon: 'pi pi-fw pi-pencil',
						command: () => {
							changeTheme('indigo-light');
						},
					},
					{
						label: 'Soho-Light',
						icon: 'pi pi-fw pi-pencil',
						command: () => {
							changeTheme('soho-light');
						},
					},
				],
			},
		]);

		function changeTheme(themeName) {
			console.log('themeName', themeName);
			document
				.getElementsByTagName('head')[0]
				.insertAdjacentHTML(
					'beforeend',
					`<link rel="stylesheet" href="https://x-vendor.pcpogo.com/themes/${themeName}/theme.css" />`
				);
		}

		watch(
			() => i18n.global.locale,
			settings => {
				// use toRaw here to get a readable console.log result
				console.log('lists.value', lists.value);
				store.commit('changeLang', { lang: settings });
			},
			{ deep: true }
		);

		return { t, lists };
	},
};
</script>
<style scoped>
.pi-apple {
	position: relative;
	font-size: 30px;
	left: 20px;
}

#navBarTop {
	background: rgba(255, 255, 255, 0.904);
	width: 100%;
	z-index: 50;
	height: 40px;
	display: flex;
	align-items: center;
	position: fixed;
}

.nav-top {
	position: fixed;
	height: auto;
	z-index: 50;
	overflow: auto;
	right: 2%;
}

.nav-ul {
	height: 40px;
	display: flex;
	margin: auto 0;
	list-style-type: none;
}

.nav-ul a {
	text-decoration: none;
	height: 40px;
	color: rgb(82, 82, 82);
	width: 140px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
}

::v-deep(.nav-text .p-menubar-root-list) {
	margin-left: 0px;
}

.p-menubar {
	position: fixed;
	margin-top: 40px;
	width: 100%;
	z-index: 50;
}

@media (max-width: 600px) {
	#navBarTop {
		width: 100vw;
	}

	.p-menubar {
		position: fixed;
		margin-top: 40px;
		width: 100vw;
		z-index: 50;
	}

	.nav-ul a {
		width: 80px;
		font-size: 14px;
	}
	.nav-top {
		left: -10px;
		background: rgb(255, 255, 255);
		z-index: 50;
	}

	.pi-apple {
		font-size: 25px;
		z-index: 55;
		left: 10px;
	}
}
</style>
