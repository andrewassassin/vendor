<template>
	<div class="join-pcpogo">
		<div class="p-md-12 p-text-center">
			<h3>Welcome to join pcpgo</h3>
		</div>
		<div class="p-fluid p-md-6 p-d-flex p-jc-center p-flex-wrap">
			<div class="p-md-8 p-col-12">
				<div class="p-field p-grid p-d-flex p-ai-center">
					<label for="lastname4" class="p-col-2 p-mb-2 p-md-1 p-mb-md-0">
						<div class="step-icon">1</div>
					</label>
					<div class="p-col-10 p-md-8">
						<h3 class="p-m-0">Contact Information</h3>
					</div>
				</div>
				<div class="p-field p-grid">
					<label for="lastname4" class="p-col-12 p-mb-2 p-md-1 p-mb-md-0">
                    </label>
					<div class="p-col-12 p-mb-2 p-md-8">Contact Person's Name, E-mail, phone</div>
				</div>
			</div>
			<div class="p-md-8 p-col-12">
				<div class="p-field p-grid p-mt-6 p-d-flex p-ai-center">
					<label for="lastname4" class="p-col-2 p-mb-2 p-md-1 p-mb-md-0">
                         <div class="step-icon">2</div>
                    </label>
					<div class="p-col-10 p-md-8">
						<h3 class="p-m-0">Business Information</h3>
					</div>
				</div>
				<div class="p-field p-grid">
					<label for="lastname4" class="p-col-12 p-mb-2 p-md-1 p-mb-md-0"></label>
					<div class="p-col-12 p-mb-2 p-md-8">Business Name, Federal tax classification, TIN</div>
				</div>
			</div>
			<div class="p-md-8 p-col-12">
				<div class="p-field p-grid p-mt-6 p-d-flex p-ai-center">
					<label for="lastname4" class="p-col-2 p-mb-2 p-md-1 p-mb-md-0">
                         <div class="step-icon">3</div>
                    </label>
					<div class="p-col-10 p-md-8">
						<h3 class="p-m-0">Billing Information</h3>
					</div>
				</div>
				<div class="p-field p-grid">
					<label for="lastname4" class="p-col-12 p-mb-2 p-md-1 p-mb-md-0"></label>
					<div class="p-col-12 p-mb-2 p-md-8">Bank account & credit card</div>
				</div>
			</div>
		</div>
		<div class="p-md-12 p-text-center">
			<p>
				By clicking on "confirm", you agree to
				<span class="pc-agreement">pcpogo's business agreement</span>
				.
			</p>
		</div>
		<div class="p-col-8 p-md-4 p-d-flex p-jc-center">
			<Button @click.prevent="" label="Confirm" />
		</div>
	</div>
</template>
<style scoped>
.join-pcpogo {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}

.step-icon {
	width: 35px;
	height: 35px;
	border-radius: 50%;
	font-size: 20px;
	line-height: 35px;
	text-align: center;
	border: 1px black solid;
}

.pc-agreement {
	text-decoration: underline;
}
</style>
