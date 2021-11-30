<template>
	<div>
		<section class="section">
			<div class="p-mb-6">
				<h2 class="p-mt-1">{{ $t('__steps') }}</h2>
				<p>1.{{ $t('__steps_direction1') }}</p>
				<p>2.{{ $t('__steps_direction2') }}</p>
				<p>3.{{ $t('__steps_direction3') }}</p>
			</div>
			<div class="p-mb-6">
				<h2>{{ $t('__download_sample_file') }}</h2>
				<Button :label="$t('__download')" type="button"></Button>
			</div>
			<div class="p-mb-6">
				<h2>{{ $t('__upload_pcpogo_file') }}</h2>
				<h4 class="p-mb-1">{{ $t('__upload_pcpogo_direction') }}</h4>
				<div class="p-d-flex p-flex-wrap p-ai-center">
					<h4 class="p-md-2 p-col-12">{{ $t('__upload_excel') }}</h4>
					<Button :label="$t('__choose_file')" type="button"></Button>
				</div>
				<div class="p-d-flex p-flex-wrap p-ai-center">
					<h4 class="p-md-2 p-col-12">{{ $t('__upload_image_zip') }}</h4>
					<Button :label="$t('__choose_file')" type="button"></Button>
				</div>
			</div>
		</section>
		<section class="section">
			<div class="p-mb-6">
				<h2 class="p-mt-1">{{ $t('__steps') }}</h2>
				<p>1.{{ $t('__upload_amazon_direction1') }}</p>
				<p>2.{{ $t('__steps_direction3') }}</p>
			</div>
			<div class="p-mb-6">
				<h2>{{ $t('__upload_other_file') }}</h2>
				<h4 class="p-mb-1">{{ $t('__upload_other_direction') }}</h4>
				<div class="p-d-flex p-flex-wrap p-ai-center">
					<h4 class="p-md-2 p-col-12">{{ $t('__file_source') }}</h4>
					<Dropdown
						class="p-md-2 p-p-0"
						v-model="roleOfSelling"
						:options="sellings"
						optionLabel="name"
						optionValue="code"
						:placeholder="`${$t('__select')}`" />
				</div>
				<div class="p-d-flex p-flex-wrap p-ai-center">
					<h4 class="p-md-2 p-col-12">{{ $t('__upload_excel') }}</h4>
					<Button :label="$t('__choose_file')" type="button"></Button>
				</div>
			</div>
		</section>
	</div>
</template>
<style scoped>
.section {
	border: 2px rgb(163, 163, 163) solid;
	padding: 30px;
	margin: 20px 0;
	border-radius: 8px;
}
</style>
