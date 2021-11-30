<template>
	<div>
		<section class="section">
			<div class="p-mb-6">
				<h2 class="p-mt-1">{{ $t('__view_your_upload_status') }}</h2>
				<h4 class="p-mb-1">{{ $t('__upload_status_direction') }}</h4>
				<DataTable class="p-mt-4" :value="upLoadStatus" responsiveLayout="scroll">
					<Column field="date" :header="$t('__date')"></Column>
					<Column field="fileName" :header="$t('__file_name')"></Column>
					<Column field="UploadFileType" :header="$t('__uploaded_file_type')"></Column>
					<Column field="status" :header="$t('__status')"></Column>
					<Column :header="$t('__action')" style="min-width: 12rem">
						<template #body="{ data }">
							{{ data.action_line1 }}
							<br />
							{{ data.action_line2 }}
						</template>
					</Column>
				</DataTable>
			</div>
		</section>
	</div>
</template>
<script>
import { ref, onMounted } from 'vue';
export default {
	setup() {
		onMounted(() => {
			upLoadStatus.value = data.value;
		});
		const upLoadStatus = ref();
		const data = ref([
			{
				date: 'May 4, 2021 11:05:09 PM PDT',
				fileName: 'C2_bulk',
				UploadFileType: 'Amazon all listing txt',
				status: '檔案處理中',
				action: '',
			},
			{
				date: 'May 23, 2021 10:05:09 PM PDT',
				fileName: 'a_bulk',
				UploadFileType: 'Amazon bulk excel',
				status: 'Failed:5',
				action: 'Download your pcpogo excel',
			},
			{
				date: 'June 14, 2021 11:25:09 PM PDT',
				fileName: 'C1_bulk',
				UploadFileType: 'pcpogo excel',
				status: 'Success:4 Failed:3',
				action_line1: `Download your excel`,
				action_line2: `前往上架送審列表區`,
			},
			{
				date: 'July 4, 2021 17:05:09 PM PDT',
				fileName: 'A1_bulk',
				UploadFileType: 'pcpogo excel',
				status: 'Success:9 Failed:0',
				action: '前往上架送審列表區',
			},
		]);
		return { upLoadStatus };
	},
};
</script>
<style scoped>
.section {
	border: 2px rgb(163, 163, 163) solid;
	padding: 30px;
	margin: 20px 0;
	border-radius: 8px;
}
</style>
