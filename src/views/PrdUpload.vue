<template>
	<div class="content">
		<section>
			<TabView ref="tabview1">
				<TabPanel :header="$t('__uploaded_file')">
					<UploadFile />
				</TabPanel>
				<TabPanel :header="$t('__uploaded_status')">
					<UploadStatus />
				</TabPanel>
			</TabView>
		</section>
		<router-view />
	</div>
</template>
<script>
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import UploadFile from '@/components/UploadFile';
import UploadStatus from '@/components/UploadStatus';
export default {
	setup() {},
	components: {
		TabView,
		TabPanel,
		UploadFile,
		UploadStatus,
	},
};
</script>
<style lang="scss" scoped>
.content {
	padding: 120px 250px 40px 50px;
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

@media (max-width: 600px) {
	.content {
		padding: 30px 10px 0px 2px;
	}

	::v-deep(.p-tabview-nav-content) {
		margin-top: 70px;
	}
}
</style>
