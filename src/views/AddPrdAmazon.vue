<template>
	<div>
		<form class="add-form">
			<h1>{{ $t('__add_products_via_amazon') }}</h1>
			<div class="card">
				<div class="p-fluid">
					<h3>{{ $t('__add_products_via_amazon') }}</h3>
					<div class="p-field p-grid">
						<label for="firstname4" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">*{{ $t('__source') }}</label>
						<div class="p-col-12 p-md-1">
							<Dropdown v-model="source" :options="sellings" optionLabel="name" optionValue="code" />
						</div>
					</div>
					<div class="p-field p-grid">
						<label for="lastname4" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">
							*{{ $t('__seller_profile_url') }}
						</label>
						<div class="p-col-12 p-mb-2 p-md-2">
							<InputText id="lastname4" type="text" />
						</div>
					</div>
					<div class="p-field p-grid">
						<label class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">*{{ $t('__marketplace_name') }}</label>
						<div class="p-col-12 p-md-2">
							<InputText id="firstname4" type="text" />
						</div>
					</div>
					<div class="p-field p-grid">
						<label class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">*{{ $t('__amazon_account_name') }}</label>
						<div class="p-col-12 p-md-2">
							<InputText id="firstname4" type="text" />
						</div>
					</div>
					<div class="p-field p-grid">
						<label class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">*{{ $t('__email') }}</label>
						<div class="p-col-12 p-md-2">
							<InputText id="firstname4" type="text" />
						</div>
					</div>
					<div class="p-field p-grid">
						<label class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">*{{ $t('__phone') }}</label>
						<div class="p-col-12 p-md-2">
							<InputText id="firstname4" type="text" />
						</div>
					</div>
					<div class="p-field p-grid p-d-flex p-ai-center p-ml-1">
						<Checkbox class="p-mr-2" id="city3" name="city2" value="Chicago" v-model="checked" />
						<label for="city3" class="p-mb-0">{{ $t('__abide_rules') }}</label>
					</div>
					<div class="p-field p-grid p-md-2">
						<Button @click.prevent="" :label="$t('__get_my_products')" />
					</div>

					<DataTable
						:value="products"
						:paginator="true"
						class="p-datatable-customers"
						:rows="10"
						dataKey="id"
						:rowHover="true"
						v-model:selection="selectedEdit"
						paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
						:rowsPerPageOptions="[10, 25, 50]"
						currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
						:globalFilterFields="['name', 'country.name', 'representative.name', 'status']"
						responsiveLayout="scroll">
						<template #empty>No customers found.</template>
						<template #loading>Loading customers data. Please wait.</template>
						<Column selectionMode="multiple"></Column>
						<Column field="source" :header="$t('__source')"></Column>
						<Column field="sellerName" style="min-width: 8rem" :header="$t('__seller_name')"></Column>
						<Column field="accountName" :header="$t('__account_name')"></Column>
						<Column field="applicationDate" :header="$t('__application_date')"></Column>
						<Column field="status" :header="$t('__status')"></Column>
						<Column field="finishDate" :header="$t('__finish_date')"></Column>
						<Column field="productNum" :header="$t('__product_number')"></Column>
						<Column field="quantity" :header="$t('__quantity')"></Column>
						<Column :header="$t('__action')" style="width: 7rem">
							<template #body>
								<Button :label="$t('__edit')" type="button" @click="editForm"></Button>
							</template>
						</Column>
					</DataTable>
				</div>
			</div>
		</form>
	</div>
</template>
<script>
import PrdDetail from '@/views/PrdDetail.vue';
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
export default {
	setup() {
		const router = useRouter();
		const checked = ref(false);
		const selectedEdit = ref();
		const source = ref('amazon');
		const sellings = ref([
			{ name: 'Amazon', code: 'amazon' },
			{ name: 'eBay', code: 'ebay' },
		]);
		const products = ref([
			{
				id: '1000',
				code: 'f230fh0g3',
				source: 'Amazon',
				sellerName: 'KOKO Market',
				accountName: 'Ritta',
				applicationDate: '2021/06/13 12:02:05',
				status: 'Processing',
				finishDate: '',
				productNum: '',
				action: '',
			},
		]);

		function editForm() {
			router.push({
				path: '/prdDetail',
				component: PrdDetail,
			});
		}

		onMounted(() => {
			console.log('sourceValue', source.value);
		});

		watch(source, function (newVal) {
			console.log('newVal: ', newVal);
			console.log('sellings: ', sellings.value);
		});

		return { checked, source, sellings, products, editForm, selectedEdit };
	},
};
</script>
<style scoped>
.add-form {
	margin: 130px 30px 0 30px;
}
</style>
