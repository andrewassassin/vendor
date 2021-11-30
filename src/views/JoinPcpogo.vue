<template>
    <div>
        <Toast />

        <div class="card">
            <Steps :model="items" :readonly="true" />
        </div>

        <router-view v-slot="{ Component }">
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        </router-view>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {


        const items = ref([
            {
                label: 'Contact',
                to: "/"
            },
           
        ]);
        
        return { items }
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

