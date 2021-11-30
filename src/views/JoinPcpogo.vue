<template>
    <div>
        <Toast />

        <div class="card">
            <Steps :model="items" :readonly="true" />
        </div>

        <router-view v-slot="{Component}" :formData="formObject" @prevPage="prevPage($event)" @nextPage="nextPage($event)" @complete="complete">
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        </router-view>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'primevue/usetoast';

export default {
    setup() {
        const router = useRouter();
        const toast = useToast();
        const items = ref([
            {
                label: 'Contact',
                to: "/Contact"
            },
            {
                label: 'Seat',
                to: "/seat",
            },
            {
                label: 'Payment',
                to: "/payment",
            },
            {
                label: 'Confirmation',
                to: "/confirmation",
            }
        ]);
        const formObject = ref({});

        const nextPage = (event) => {
            for (let field in event.formData) {
                formObject.value[field] = event.formData[field];
            }

            router.push(items.value[event.pageIndex + 1].to);
        };
        const prevPage = (event) => {
            router.push(items.value[event.pageIndex - 1].to);
        };
        const complete = () => {
            toast.add({severity:'success', summary:'Order submitted', detail: 'Dear, ' + formObject.value.firstname + ' ' + formObject.value.lastname + ' your order completed.'});
        };

        return { items, formObject, nextPage, prevPage, complete }
    }
}
</script>

<style scoped lang="scss">
::v-deep(b) {
    display: block;
}

::v-deep(.p-card-body) {
    padding: 2rem;
}
</style>

