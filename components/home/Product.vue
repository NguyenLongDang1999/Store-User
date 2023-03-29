<script setup lang="ts">

// ** Props & Emits
interface Props {
    title: string
}

defineProps<Props>()
</script>

<template>
    <section class="section-product my-20">
        <div class="grid grid-cols-1">
            <div class="w-full mb-6 text-center">
                <h2 class="text-3xl font-medium title-font mb-2 text-gray-900 uppercase">
                    {{ $t(title) }}
                </h2>
            </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
            <CoreProduct
                v-for="(item, index) in 6"
                :key="index"
                :item="item"
            />
        </div>
    </section>
</template>
