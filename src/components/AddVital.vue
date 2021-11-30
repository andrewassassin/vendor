<template>
	<div>
		<form>
			<div class="card">
				<div class="p-fluid">
					<div class="p-field p-grid">
						<label for="firstname4" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">
							*{{ $t('__brand_name') }}
						</label>
						<div class="p-col-12 p-md-4">
							<InputText id="firstname4" :placeholder="`${$t('__brand')}`" type="text" />
						</div>
					</div>
					<div class="p-field p-grid">
						<label for="lastname4" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">
							*{{ $t('__product_name') }}
						</label>
						<div class="p-col-12 p-mb-2 p-md-2">
							<InputText id="lastname4" :placeholder="`${$t('__brand')}`" type="text" />
						</div>
						<div class="p-col-12 p-md-4">
							<InputText id="lastname4" :placeholder="`${$t('__product')}`" type="text" />
						</div>
					</div>
					<div class="p-field p-grid">
						<label for="firstname4" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">*{{ $t('__category') }}</label>
						<div class="p-col-12 p-md-3">
							<span class="p-input-icon-right">
								<i class="pi pi-search" />
								<InputText id="Category" type="text" :placeholder="`${$t('__search')}`" />
							</span>
						</div>
					</div>
					<div class="p-field p-grid">
						<label for="lastname4" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"></label>
						<label for="lastname4" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">
							{{ $t('__select_a_category') }}
						</label>
					</div>
					<div class="p-field p-grid">
						<label for="lastname4" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"></label>
						<div class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">
							<TieredMenu :model="items" />
						</div>
					</div>
					<div class="p-field p-grid">
						<label for="firstname4" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">
							{{ $t('__role_of_selling') }}
						</label>
						<div class="p-col-12 p-md-4">
							<Dropdown
								v-model="roleOfSelling"
								:options="sellings"
								optionLabel="name"
								optionValue="code"
								:placeholder="`${$t('__select')}`" />
						</div>
					</div>
					<div class="p-field p-grid">
						<label class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">{{ $t('__SKU') }}</label>
						<div class="p-col-12 p-md-2">
							<InputText id="firstname4" :placeholder="`${$t('__unique_number')}`" type="text" />
						</div>
					</div>
					<div class="p-field p-grid">
						<label class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">{{ $t('__variation') }}</label>
						<div class="p-col-12 p-md-1">
							<Button @click.prevent="showTable" :label="`${$t('__add')}`" />
						</div>
						<div class="p-col-12 p-md-12">
							<AddTable v-show="showData" />
						</div>
					</div>
					<div class="p-field p-grid">
						<label class="p-col-12 p-mb-2 p-md-2 p-mb-md-0 p-sm-12">{{ $t('__warranty') }}</label>
						<div class="p-field-checkbox p-col p-md p-mb-0">
							<Checkbox id="city3" name="city2" value="Chicago" v-model="checked" />
							<label for="city3">{{ $t('__yes') }}</label>
						</div>
					</div>
					<div class="p-field p-grid">
						<label class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"></label>
						<div class="p-col-12 p-md-4">
							<Textarea id="Warranty" rows="3" cols="50" :autoResize="true" />
						</div>
					</div>
					<div class="p-field p-grid">
						<label class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">{{ $t('__shipping_template') }}</label>
						<div class="p-col-12 p-md-2">
							<Dropdown
								v-model="shipTemplate"
								:options="ships"
								optionLabel="name"
								optionValue="code"
								:placeholder="`${$t('__select')}`" />
						</div>
					</div>
					<div class="p-field p-grid">
						<label class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">{{ $t('__shipping_address') }}</label>
						<div class="p-col-12 p-md-2">
							<Dropdown
								v-model="shipAddress"
								:options="address"
								optionLabel="name"
								optionValue="code"
								:placeholder="`${$t('__select')}`" />
						</div>
					</div>
					<div class="p-field p-grid">
						<label class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">{{ $t('__return_address') }}</label>
						<div class="p-col-12 p-md-2">
							<Dropdown
								v-model="rAddress"
								:options="returns"
								optionLabel="name"
								optionValue="code"
								:placeholder="`${$t('__select')}`" />
						</div>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>
<script>
import { ref } from 'vue';

export default {
	setup() {
		const checked = ref(false);
		const showData = ref(false);
		const roleOfSelling = ref();
		const shipTemplate = ref();
		const shipAddress = ref();
		const rAddress = ref();
		const sellings = ref([
			{ name: 'New York', code: 'NY' },
			{ name: 'Rome', code: 'RM' },
			{ name: 'London', code: 'LDN' },
		]);

		const ships = ref([
			{ name: 'Paris', code: 'NY' },
			{ name: 'Heidelberg', code: 'RM' },
			{ name: 'London', code: 'LDN' },
		]);

		const address = ref([
			{ name: 'Rome', code: 'RM' },
			{ name: 'London', code: 'LDN' },
			{ name: 'Stockholm', code: 'IST' },
		]);

		const returns = ref([
			{ name: 'New York', code: 'NY' },
			{ name: 'Tokyo', code: 'RM' },
		]);

		const items = ref([
			{
				label: 'File',
				items: [
					{
						label: 'New',
						items: [
							{
								label: 'Bookmark',
								icon: 'pi pi-fw pi-bookmark',
							},
							{
								label: 'Video',
								icon: 'pi pi-fw pi-video',
							},
						],
					},
					{
						label: 'Delete',
						icon: 'pi pi-fw pi-trash',
					},
				],
			},
			{
				label: 'Edit',
				items: [
					{
						label: 'Left',
						icon: 'pi pi-fw pi-align-left',
					},
					{
						label: 'Right',
						icon: 'pi pi-fw pi-align-right',
					},
				],
			},
			{
				label: 'Users',
				items: [
					{
						label: 'New',
						icon: 'pi pi-fw pi-user-plus',
					},
				],
			},
		]);

		function showTable() {
			showData.value = !showData.value;
		}
		return {
			showData,
			showTable,
			items,
			roleOfSelling,
			shipAddress,
			shipTemplate,
			rAddress,
			sellings,
			ships,
			address,
			returns,
			checked,
		};
	},
};
</script>
<style scoped>
@media (max-width: 600px) {
	.foot-btn {
		margin-top: 30px;
		width: 90vw;
	}

	/* 放大鏡圖示 */
	.p-input-icon-right > i:last-of-type {
		right: 10px;
		top: 20px;
	}
}
</style>
