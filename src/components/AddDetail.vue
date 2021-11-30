<template>
	<div>
		<form>
			<div class="card">
				<div class="p-fluid">
					<div class="p-field p-grid">
						<label for="manuFacturer" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">
							{{ $t('__image') }}
						</label>
						<div class="p-col-12 p-md-3 p-text-left">
							{{ $t('__upload_images_drag_drop') }}
							<input type="file" accept="image/png, image/jpeg" multiple @change="webpListen" />
						</div>
					</div>
					<div class="p-field p-grid">
						<label for="manuFacturer" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0" />
						<div class="p-col-12 p-md-4 p-text-left">
							<div class="p-d-flex imageSection">
								<div class="mainImage">
									<div
										v-if="imgArr && imgArr[0]"
										@drop="onDrop($event, 0)"
										@dragstart="startDrag($event, 0)"
										@dragover.prevent
										@dragenter.prevent>
										<i class="pi pi-times" @click="delImg(0)"></i>
										<img
											v-if="imgArr && imgArr[0]"
											:src="imgArr[0].url"
											style="width: 300px; height: 300px" />
									</div>
								</div>
								<div class="p-grid otehrImageSection">
									<div
										v-for="index in 6"
										:key="index"
										:class="`p-col-4 p-md-6 otherImage oi${index}`">
										<div
											v-if="imgArr && imgArr[index]"
											@drop="onDrop($event, index)"
											@dragstart="startDrag($event, index)"
											@dragover.prevent
											@dragenter.prevent>
											<i class="pi pi-times" @click="delImg(index)"></i>
											<img :src="imgArr[index].url" style="width: 132px; height: 148.5px" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="p-field p-grid">
						<label for="manuFacturer" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">
							{{ $t('__bullet_points') }}
						</label>
						<div class="p-col-12 p-md-3">
							<InputText id="manuFacturer" type="text" />
						</div>
					</div>
					<div class="p-field p-grid">
						<label for="manuFacturer" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0" />
						<div class="p-col-12 p-md-3">
							<InputText id="manuFacturer" type="text" />
						</div>
					</div>
					<div class="p-field p-grid">
						<label for="manuFacturer" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0" />
						<div class="p-col-12 p-md-3">
							<InputText id="manuFacturer" type="text" />
						</div>
					</div>
					<div class="p-field p-grid">
						<label for="manuFacturer" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0" />
						<div class="p-col-12 p-md-3">
							<InputText id="manuFacturer" type="text" />
						</div>
					</div>
					<div class="p-field p-grid">
						<label for="manuFacturer" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0" />
						<div class="p-col-12 p-md-3">
							<InputText id="manuFacturer" type="text" />
						</div>
					</div>
					<div class="p-field p-grid video-p p-d-flex p-ai-center">
						<label for="manuFacturer" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">
							{{ $t('__product_video') }}
						</label>
						<div>https://www.youtube.com/watch?v=</div>
						<InputText type="text" class="p-md-2" id="productVideo" />
					</div>
					<div class="p-grid text-area">
						<label class="p-col-12 p-md-2 p-mb-md-0 p-text-left">
							{{ $t('__product_description') }}
						</label>
						<div class="p-col-12 p-md-4">
							<Textarea rows="3" cols="40" />
						</div>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>
<script>
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import 'primeicons/primeicons.css';

// import axios from 'axios';
import { reactive } from '@vue/reactivity';

import loadImage from 'blueimp-load-image';

export default {
	components: {
		InputText,
		Textarea,
	},

	setup() {
		const imgArr = reactive([]);

		const wepbWorker = new Worker('/~static/demo_webp/worker.js?XDEBUG=jensen');

		// const webpForm = new FormData();

		wepbWorker.addEventListener('message', e => {
			const blob = e.data.blob;
			const url = URL.createObjectURL(blob);
			imgArr.push({
				url: url,
				name: e.data.cb.fstat.name,
				blob: blob,
			});
		});

		function webpListen(e) {
			Array.from(e.target.files).forEach(element => {
				loadImage(element, {
					orientation: true,
					canvas: true,
					meta: true,
				}).then(async data => {
					if (data.originalHeight > 10000 || data.originalWidth > 10000) return;
					const compareSize = [data.originalHeight, data.originalWidth].sort();
					if (compareSize[0] < 500 || compareSize[1] < 1000) return;
					if (data.exif.get('Orientation') === 1) {
						wepbWorker.postMessage({
							type: 'file',
							file: element,
							width: data.originalWidth,
							height: data.originalHeight,
						});
					} else {
						const imageBitmapPromise = await createImageBitmap(data.image);
						wepbWorker.postMessage({
							type: 'canvas2webp',
							bmap: imageBitmapPromise,
							name: element.name,
						});
					}
				});
			});
		}

		// function updWebp() {
		// 	imgArr.forEach(element => {
		// 		webpForm.append(element.name, element.blob, element.name);
		// 	});
		// 	axios({
		// 		method: 'post',
		// 		url: '/px/prdimgUpt.php',
		// 		data: webpForm,
		// 		headers: { 'Content-Type': 'multipart/form-data' },
		// 	})
		// 		.then(function (response) {
		// 			//handle success
		// 			console.log(response);
		// 		})
		// 		.catch(function (response) {
		// 			//handle error
		// 			console.log(response);
		// 		});
		// }

		function startDrag(evt, index) {
			evt.dataTransfer.dropEffect = 'move';
			evt.dataTransfer.effectAllowed = 'move';
			evt.dataTransfer.setData('text/plain', index);
		}

		function onDrop(evt, toIndex) {
			const fromIndex = evt.dataTransfer.getData('text/plain');
			[imgArr[toIndex], imgArr[fromIndex]] = [imgArr[fromIndex], imgArr[toIndex]];
		}

		function delImg(index) {
			imgArr.splice(index, 1);
		}

		return {
			imgArr,

			webpListen,
			delImg,
			startDrag,
			onDrop,
		};
	},
};
</script>
<style scoped>
.video-p .p-inputtext {
	width: 400px;
}

.video-p div {
	margin-left: 7px;
}

.text-area .p-inputtext {
	height: 150px;
}

.imageSection {
	box-sizing: border-box;
	/* border: 1px solid #ced4da; */
	width: 750px;
}

.mainImage {
	width: 300px;
	height: 300px;
	border: 1px solid #ced4da;
	margin: 0 -1px 0 -1px;
	border-radius: 3px 0 0 3px;
	position: relative;
}

.mainImage::after {
	content: 'Main';
	position: absolute;
	bottom: 5%;
	left: 50%;
	transform: translate(-50%, 0%);
}

.otehrImageSection {
	margin: 0;
	max-width: 450px;
}

.otherImage {
	width: 150px;
	height: 150px;
	border: 1px solid #ced4da;
}

.otehrImageSection .oi1 {
	margin: 0 -1px -1px 0;
}
.otehrImageSection .oi2 {
	margin: 0 -1px -1px 0;
}
.otehrImageSection .oi3 {
	margin: 0 0 -1px 0;
	border-radius: 0 3px 0 0;
}
.otehrImageSection .oi4 {
	margin: 0 -1px 0px 0;
}
.otehrImageSection .oi5 {
	margin: 0 -1px 0px 0;
}

.otehrImageSection .oi6 {
	border-radius: 0 0 3px 0;
}

@media (max-width: 600px) {
	.video-p .p-inputtext {
		margin-left: 8px;
		width: 89vw;
	}

	.p-fileupload-buttonbar {
		width: 100vw;
	}

	.imageSection {
		width: 100%;
		flex-direction: column;
	}

	.mainImage {
		width: 100%;
		height: 90vw;
		border-radius: 3px 3px 0 0;
		margin: 0 0 -1px 0;
	}

	.otehrImageSection {
		max-width: unset;
		width: 100%;
	}
	.otherImage {
		width: 50%;
		height: 45vw;
	}
	.otehrImageSection .oi1 {
		margin: 0 0 0 0;
	}
	.otehrImageSection .oi2 {
		margin: 0 0 0 0;
	}
	.otehrImageSection .oi3 {
		margin: -1px 0 0 0;
		border-radius: unset;
	}
	.otehrImageSection .oi4 {
		margin: -1px 0px 0 0;
	}
	.otehrImageSection .oi5 {
		margin: -1px 0 0 0;
	}

	.otehrImageSection .oi6 {
		margin: -1px 0 0 0;
		border-radius: unset;
	}
}
</style>
