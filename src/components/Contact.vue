
<template>
    <div class="stepsdemo-content">
        <Card>
            <template v-slot:title>
                Personal Information
            </template>
            <template v-slot:subtitle>
                Enter your personal information
            </template>
            <template v-slot:content>
                <div class="p-fluid">
                  5555
                </div>
            </template>
            <template v-slot:footer>
                <div class="p-grid p-nogutter p-justify-between">
                   5555
                </div>
            </template>
        </Card>
    </div>
</template>
<style >
.stepsdemo-content{
    position: relative;
    z-index: 9999;
}
</style>