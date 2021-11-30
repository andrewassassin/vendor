<template>
	<div class="edit-form">
		<Button class="p-d-flex p-mb-3 p-jc-start" @click.prevent="goBackBtn" :label="$t('__back')" />
		<DataTable
			:value="editForm"
			:paginator="true"
			class="p-datatable-customers"
			:rows="10"
			dataKey="id"
			:rowHover="true"
			v-model:selection="selectedEdit"
			paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
			:rowsPerPageOptions="[10, 25, 50]"
			currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
			:globalFilterFields="['name', 'country.name', 'representative.name', 'status']"
			responsiveLayout="scroll">
			<template #empty>No customers found.</template>
			<template #loading>Loading customers data. Please wait.</template>
			<Column selectionMode="multiple"></Column>
			<Column field="category" :header="$t('__category')" style="min-width: 8rem" sortable>
				<template #body>
					<InputText id="Category" type="text" style="width: 6rem" />
				</template>
			</Column>
			<Column
				field="mainImage"
				:header="$t('__main_image')"
				sortable
				filterMatchMode="contains"
				style="min-width: 8rem">
				<template #body>
					<div class="p-col-12 p-md-2">
						<img
							alt="logo"
							src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
							height="40" />
					</div>
				</template>
			</Column>
			<Column
				field="brandName"
				:header="$t('__brand_name')"
				sortable
				filterField="representative"
				sortField="representative.name"
				:showFilterMatchModes="false"
				:filterMenuStyle="{ width: '10rem' }"
				style="min-width: 10rem">
				<template #body>
					<InputText id="Category" type="text" style="width: 6rem" />
				</template>
			</Column>
			<Column
				field="productName"
				:header="$t('__product_name')"
				sortable
				dataType="numeric"
				style="min-width: 14rem">
				<template #body>
					<div class="p-col-12 p-md-1">
						<Textarea id="Warranty" rows="3" cols="25" />
					</div>
				</template>
			</Column>
			<Column field="gtinAsin" :header="$t('__gtin_asin')" sortable style="min-width: 14rem">
				<template #body>
					<div class="p-col-1 p-lg-1 p-md-6 p-d-flex p-ai-center">
						<Dropdown
							@change="dropDown(value)"
							:options="gOrA"
							optionLabel="name"
							optionValue="code"
							style="width: 6rem" />
						<InputText id="lastname4" type="text" style="width: 7rem" />
					</div>
				</template>
			</Column>
			<Column
				field="lastPrice"
				:header="$t('__list_price_cost_price')"
				sortable
				:showFilterMatchModes="false"
				style="min-width: 10rem">
				<template #body>
					<div class="p-d-flex p-flex-wrap p-ai-center p-col-12 p-md-4">
						<div class="p-d-flex p-ai-center p-mb-2">
							USD$
							<InputText id="Category" type="text" style="width: 5rem" class="p-ml-1" />
						</div>
						USD${{}}
					</div>
				</template>
			</Column>
			<Column
				field="quantity"
				:header="$t('__quantity')"
				sortable
				:showFilterMatchModes="false"
				style="min-width: 10rem">
				<template #body>
					<div class="p-col-12 p-md-4">
						<InputText id="Category" type="text" style="width: 5rem" />
					</div>
				</template>
			</Column>
			<Column field="sku" :header="$t('__SKU')" sortable :showFilterMatchModes="false" style="min-width: 10rem">
				<template #body>
					<div class="p-col-12 p-md-4">
						<InputText id="Category" type="text" style="width: 5rem" />
					</div>
				</template>
			</Column>
			<Column :header="$t('__action')" style="min-width: 10rem">
				<template #body>
					<Button :label="$t('__edit')" type="button"></Button>
				</template>
			</Column>
		</DataTable>
	</div>
</template>
<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
	setup() {
		const router = useRouter();
		const gtinAsin = ref([]);
		const selectedEdit = ref();
		const gOrA = ref([
			{ name: 'GTIN', code: 'gtin' },
			{ name: 'ASIN', code: 'asin' },
		]);
		const editForm = ref([
			{
				id: '1000',
				category: '',
				mainImage: 'Amazon',
				brandName: 'KOKO Market',
				productName: 'Ritta',
				gtinAsin: gtinAsin.value,
				lastPrice: '',
				quantity: '',
				sku: '',
				action: '',
			},
			{
				id: '2000',
				category: 'f230fh0g3',
				mainImage: 'Ebay',
				brandName: 'KOKO Market',
				productName: 'Ritta',
				gtinAsin: gtinAsin.value,
				lastPrice: 'Processing',
				quantity: '',
				sku: '',
				action: '',
			},
		]);

		function dropDown() {
			console.log('value', editForm.value);
			console.log('gtinAsin', gtinAsin.value);
		}

		function goBackBtn() {
			router.go(-1);
		}
		return { editForm, selectedEdit, gtinAsin, gOrA, dropDown, goBackBtn };
	},
};
</script>
<style scoped>
.edit-form {
	margin: 130px 70px 0 70px;
}

.p-inputtext {
}
</style>
