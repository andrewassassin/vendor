<template>
	<div id="crud-table">
		<div class="card">
			<Toolbar class="p-mb-4">
				<template #left>
					<Button label="New" icon="pi pi-plus" class="p-button-success p-mr-2" />
					<Button label="Delete" icon="pi pi-trash" class="p-button-danger" />
				</template>

				<template #right>
					<FileUpload
						mode="basic"
						accept="image/*"
						:maxFileSize="1000000"
						label="Import"
						chooseLabel="Import"
						class="p-mr-2 p-d-inline-block" />
					<Button label="Export" icon="pi pi-upload" class="p-button-help" @click="exportCSV($event)" />
				</template>
			</Toolbar>

			<DataTable
				ref="dt"
				dataKey="id"
				:paginator="true"
				:rows="10"
				paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
				:rowsPerPageOptions="[5, 10, 25]"
				currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
				responsiveLayout="scroll">
				<template #header>
					<div class="table-header p-d-flex p-flex-column p-flex-md-row p-jc-md-between">
						<h5 class="p-mb-2 p-m-md-0 p-as-md-center">Manage Products</h5>
						<span class="p-input-icon-left">
							<i class="pi pi-search" />
							<InputText placeholder="Search..." />
						</span>
					</div>
				</template>

				<Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
				<Column field="code" header="Code" :sortable="true" style="min-width: 12rem"></Column>
				<Column field="name" header="Name" :sortable="true" style="min-width: 16rem"></Column>
				<Column header="Image">
					<template #body="slotProps">
						<img
							src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
							:alt="slotProps.data.image"
							class="product-image" />
					</template>
				</Column>
				<Column field="price" header="Price" :sortable="true" style="min-width: 8rem">
					<template #body="slotProps">
						{{ formatCurrency(slotProps.data.price) }}
					</template>
				</Column>
				<Column field="category" header="Category" :sortable="true" style="min-width: 10rem"></Column>
				<Column field="rating" header="Reviews" :sortable="true" style="min-width: 12rem">
					<template #body="slotProps">
						<Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false" />
					</template>
				</Column>
				<Column field="inventoryStatus" header="Status" :sortable="true" style="min-width: 12rem">
					<template #body="slotProps">
						<span
							:class="
								'product-badge status-' +
								(slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : '')
							">
							{{ slotProps.data.inventoryStatus }}
						</span>
					</template>
				</Column>
				<Column :exportable="false" style="min-width: 8rem">
					<template #body="slotProps">
						<Button
							icon="pi pi-pencil"
							class="p-button-rounded p-button-success p-mr-2"
							@click="editProduct(slotProps.data)" />
						<Button
							icon="pi pi-trash"
							class="p-button-rounded p-button-warning"
							@click="confirmDeleteProduct(slotProps.data)" />
					</template>
				</Column>
			</DataTable>
		</div>

		<Dialog :style="{ width: '450px' }" header="Product Details" :modal="true" class="p-fluid">
			<img
				src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
				:alt="product.image"
				class="product-image"
				v-if="product.image" />
			<div class="p-field">
				<label for="name">Name</label>
				<InputText
					id="name"
					v-model.trim="product.name"
					required="true"
					autofocus
					:class="{ 'p-invalid': submitted && !product.name }" />
				<small class="p-error" v-if="submitted && !product.name">Name is required.</small>
			</div>
			<div class="p-field">
				<label for="description">Description</label>
				<Textarea id="description" v-model="product.description" required="true" rows="3" cols="20" />
			</div>

			<div class="p-field">
				<label for="inventoryStatus" class="p-mb-3">Inventory Status</label>
				<Dropdown
					id="inventoryStatus"
					v-model="product.inventoryStatus"
					:options="statuses"
					optionLabel="label"
					placeholder="Select a Status">
					<template #value="slotProps">
						<div v-if="slotProps.value && slotProps.value.value">
							<span :class="'product-badge status-' + slotProps.value.value">
								{{ slotProps.value.label }}
							</span>
						</div>
						<div v-else-if="slotProps.value && !slotProps.value.value">
							<span :class="'product-badge status-' + slotProps.value.toLowerCase()">
								{{ slotProps.value }}
							</span>
						</div>
						<span v-else>
							{{ slotProps.placeholder }}
						</span>
					</template>
				</Dropdown>
			</div>

			<div class="p-field">
				<label class="p-mb-3">Category</label>
				<div class="p-formgrid p-grid">
					<div class="p-field-radiobutton p-col-6">
						<RadioButton id="category1" name="category" value="Accessories" v-model="product.category" />
						<label for="category1">Accessories</label>
					</div>
					<div class="p-field-radiobutton p-col-6">
						<RadioButton id="category2" name="category" value="Clothing" v-model="product.category" />
						<label for="category2">Clothing</label>
					</div>
					<div class="p-field-radiobutton p-col-6">
						<RadioButton id="category3" name="category" value="Electronics" v-model="product.category" />
						<label for="category3">Electronics</label>
					</div>
					<div class="p-field-radiobutton p-col-6">
						<RadioButton id="category4" name="category" value="Fitness" v-model="product.category" />
						<label for="category4">Fitness</label>
					</div>
				</div>
			</div>

			<div class="p-formgrid p-grid">
				<div class="p-field p-col">
					<label for="price">Price</label>
					<InputNumber id="price" v-model="product.price" mode="currency" currency="USD" locale="en-US" />
				</div>
				<div class="p-field p-col">
					<label for="quantity">Quantity</label>
					<InputNumber id="quantity" v-model="product.quantity" integeronly />
				</div>
			</div>
			<template #footer>
				<Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog" />
				<Button label="Save" icon="pi pi-check" class="p-button-text" @click="saveProduct" />
			</template>
		</Dialog>

		<Dialog :style="{ width: '450px' }" header="Confirm" :modal="true">
			<div class="confirmation-content">
				<i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
				<span v-if="product">
					Are you sure you want to delete
					<b>{{ product.name }}</b>
					?
				</span>
			</div>
			<template #footer>
				<Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductDialog = false" />
				<Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteProduct" />
			</template>
		</Dialog>

		<Dialog :style="{ width: '450px' }" header="Confirm" :modal="true">
			<div class="confirmation-content">
				<i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
				<span v-if="product">Are you sure you want to delete the selected products?</span>
			</div>
			<template #footer>
				<Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductsDialog = false" />
				<Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteSelectedProducts" />
			</template>
		</Dialog>
	</div>
</template>

<script>
import Toolbar from 'primevue/toolbar';
import FileUpload from 'primevue/fileupload';
import Rating from 'primevue/rating';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown';
import RadioButton from 'primevue/radiobutton';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';
export default {
	components: {
		Toolbar,
		InputNumber,
		FileUpload,
		RadioButton,
		Dialog,
		Rating,
		Dropdown,
		Button,
		Column,
		DataTable,
		InputText,
		Textarea,
	},
};
</script>

<style lang="scss" scoped>
.card {
	width: 800px;
}
.table-header {
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media screen and (max-width: 960px) {
		align-items: start;
	}
}

.product-image {
	width: 50px;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.p-dialog .product-image {
	width: 50px;
	margin: 0 auto 2rem auto;
	display: block;
}

.confirmation-content {
	display: flex;
	align-items: center;
	justify-content: center;
}
@media screen and (max-width: 960px) {
	::v-deep(.p-toolbar) {
		flex-wrap: wrap;

		.p-button {
			margin-bottom: 0.25rem;
		}
	}

	.card {
		width: 350px;
	}
}
</style>
