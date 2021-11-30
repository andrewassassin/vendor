<template>
	<div>
		<Navbar />
	</div>
	<div class="content">
		<section>
			<TabView ref="tabview1">
				<TabPanel :header="$t('__vital_info')">
					<addVital />
				</TabPanel>
				<TabPanel :header="$t('__spec')">
					<addSpeci />
				</TabPanel>
				<TabPanel :header="$t('__detail')">
					<addDetail />
				</TabPanel>
			</TabView>
			<div class="footer-btn">
				<Button :label="$t('__submit')" />
				<Button :label="$t('__preview')" />
				<Button :label="$t('__save_as_draft')" />
				<Button :label="$t('__cancel')" />
			</div>
		</section>
		<router-view />
	</div>
</template>
<script>
import Navbar from '@/components/Navbar';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import addVital from '@/components/AddVital';
import addSpeci from '@/components/AddSpeci';
import addDetail from '@/components/AddDetail';
export default {
	setup() {},
	components: {
		Navbar,
		TabView,
		TabPanel,
		addVital,
		addSpeci,
		addDetail,
	},
};
</script>
<style lang="scss" scoped>
.content {
	padding: 30px 50px 40px 50px;
}

.tabview-custom {
	i,
	span {
		vertical-align: middle;
	}

	span {
		margin: 0 0.5rem;
	}
}

.p-tabview p {
	line-height: 1.5;
	margin: 0;
}

::v-deep(.p-tabview-nav-content) {
	margin-top: 96px;
}

.footer-btn {
	margin-top: 30px;
	margin-left: 0px;
}

@media (max-width: 600px) {
	.content {
		padding: 30px 10px 0px 10px;
	}

	::v-deep(.p-tabview-nav-content) {
		margin-top: 70px;
	}

	.footer-btn {
		margin-top: 30px;
		width: 90vw;
	}
}
</style>
