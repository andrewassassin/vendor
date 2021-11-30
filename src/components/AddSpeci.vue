<template>
	<div>
		<form>
			<div class="card">
				<div class="p-fluid">
					<div class="p-field p-grid">
						<label for="manuFacturer" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">
							{{ $t('__manufacturer') }}
						</label>
						<div class="p-col-12 p-md-3">
							<InputText id="manuFacturer" placeholder="" type="text" />
						</div>
					</div>
					<div class="p-field p-grid">
						<label for="mdn" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0 p-text-left">
							{{ $t('__manufacturer_part_number') }}
						</label>
						<div class="p-col-12 p-md-3">
							<InputText id="mdn" placeholder="" type="text" />
						</div>
					</div>
					<div class="p-field p-grid">
						<label class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">{{ $t('__place_of_origin') }}</label>
						<div class="p-col-12 p-md-3">
							<Dropdown
								v-model="shipAddress"
								:options="address"
								optionLabel="name"
								optionValue="code"
								:placeholder="$t('__select')" />
						</div>
					</div>
					<div class="p-field p-grid">
						<label class="p-col-12 p-mb-2 p-md-2 p-mb-md-0 p-mt-3">
							{{ $t('__item_dimensions') }}
						</label>
						<div class="p-col-12 p-mb-2 p-md-2 p-mb-md-0 p-mt-3">
							<span class="p-float-label">
								<InputText id="inputtext" type="text" />
								<label for="inputtext">{{ $t('__length') }}</label>
							</span>
						</div>
						<div class="p-col-12 p-mb-2 p-md-2 p-mb-md-0 p-mt-3">
							<span class="p-float-label">
								<InputText id="inputtext" type="text" />
								<label for="inputtext">{{ $t('__width') }}</label>
							</span>
						</div>
						<div class="p-col-12 p-mb-2 p-md-2 p-mb-md-0 p-mt-3">
							<span class="p-float-label">
								<InputText id="inputtext" type="text" />
								<label for="inputtext">{{ $t('__height') }}</label>
							</span>
						</div>
						<div class="p-col-12 p-sm-2 p-mb-2 p-md-1 p-mb-md-0 p-d-flex p-ai-end p-mt-3">
							<Dropdown
								class="p-col-12"
								v-model="volume1"
								:options="cm"
								optionLabel="name"
								optionValue="code"
								:placeholder="`${$t('__cm')}`" />
						</div>
					</div>
					<div class="p-field p-grid">
						<label class="p-col-12 p-mb-2 p-md-2 p-mb-md-0 p-mt-3">{{ $t('__item_weight') }}</label>
						<div class="p-col-12 p-mb-2 p-md-2 p-mb-md-0 p-mt-3">
							<InputText type="text" v-model="weight" />
						</div>
						<div class="p-col-12 p-mb-3 p-md-1 p-mb-md-0 p-d-flex p-ai-end p-mt-3">
							<Dropdown
								class="p-col-12"
								v-model="weight"
								:options="kg"
								optionLabel="name"
								optionValue="code"
								:placeholder="`${$t('__kg')}`" />
						</div>
					</div>
					<div class="p-field p-grid">
						<label class="p-col-12 p-mb-2 p-md-2 p-mb-md-0 p-mt-3">{{ $t('__package_dimensions') }}</label>
						<div class="p-col-12 p-mb-2 p-md-2 p-mb-md-0 p-mt-3">
							<span class="p-float-label">
								<InputText id="inputtext" type="text" />
								<label for="inputtext">{{ $t('__length') }}</label>
							</span>
						</div>
						<div class="p-col-12 p-mb-2 p-md-2 p-mb-md-0 p-mt-3">
							<span class="p-float-label">
								<InputText id="inputtext" type="text" />
								<label for="inputtext">{{ $t('__width') }}</label>
							</span>
						</div>
						<div class="p-col-12 p-mb-2 p-md-2 p-mb-md-0 p-mt-3">
							<span class="p-float-label">
								<InputText id="inputtext" type="text" />
								<label for="inputtext">{{ $t('__height') }}</label>
							</span>
						</div>
						<div class="p-col-12 p-mb-2 p-md-1 p-mb-md-0 p-d-flex p-ai-end">
							<Dropdown
								class="p-col-12"
								v-model="volume2"
								:options="cm"
								optionLabel="name"
								optionValue="code"
								:placeholder="`${$t('__cm')}`" />
						</div>
					</div>
					<div class="p-field p-grid">
						<label class="p-col-12 p-mb-2 p-md-2 p-mb-md-0 p-mt-3">{{ $t('__model_number') }}</label>
						<div class="p-col-12 p-md-3 p-mt-3">
							<InputText id="model" type="text" />
						</div>
					</div>
					<div class="p-field p-grid">
						<label class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">{{ $t('__included_components') }}</label>
						<div class="p-col-12 p-md-3">
							<InputText id="model" type="text" />
						</div>
					</div>
					<div class="p-field p-grid">
						<label class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">{{ $t('__ingredient') }}</label>
						<div class="p-col-12 p-md-3">
							<InputText id="model" type="text" />
						</div>
					</div>
					<div class="p-field p-grid">
						<label class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">{{ $t('__material') }}</label>
						<div class="p-col-12 p-md-3">
							<InputText id="model" type="text" />
						</div>
					</div>
					<div class="p-field p-grid">
						<label class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">{{ $t('__product_specification') }}</label>
						<div class="p-col-12 p-md-3 table-group">
							<table class="table-border">
								<thead>
									<tr>
										<th class="text-center">{{ $t('__title') }}</th>
										<th class="text-center">{{ $t('__value') }}</th>
									</tr>
								</thead>
								<tbody id="cartTableBody">
									<tr>
										<td contenteditable class="text-center">
											{{ $t('__title') }}
										</td>
										<td contenteditable class="text-center">
											{{ $t('__value') }}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>
<script>
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
export default {
	setup() {
		const { t, locale } = useI18n();
		const shipAddress = ref();
		const volume1 = ref();
		const volume2 = ref();
		const weight = ref();

		const address = ref([
			{ name: 'LA', code: 'LA' },
			{ name: 'New York', code: 'NY' },
		]);
		const kg = ref([
			{ name: t('__g'), code: 'g' },
			{ name: t('__kg'), code: 'kg' },
		]);
		const cm = ref([
			{ name: t('__cm'), code: 'cm' },
			{ name: t('__m'), code: 'm' },
			{ name: t('__mm'), code: 'mm' },
		]);

		watch(locale, newlocale => {
			localStorage.setItem('locale', newlocale);
		});

		return { t, shipAddress, volume1, volume2, weight, address, kg, cm };
	},
	components: {
		InputText,
		Dropdown,
	},
};
</script>
<style scoped>
.table-group {
	display: flex;
	margin-top: 15px;
}

.table-group table {
	border: 1px rgb(218, 218, 218) solid;
	border-radius: 10px;
	width: 300px;
}
@media (max-width: 600px) {
	.foot-btn {
		margin-top: 30px;
		width: 90vw;
	}

	.table-group table {
		width: 100vw;
	}
}
</style>
