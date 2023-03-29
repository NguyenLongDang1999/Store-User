<template>
    <section class="section-category">
        <div class="grid grid-cols-1">
            <div class="w-full mb-6 text-center">
                <h2 class="text-3xl font-medium title-font mb-2 text-gray-900 uppercase">
                    {{ $t('Category.Popular') }}
                </h2>
            </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div
                v-for="(item, index) in 6"
                :key="index"
                class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat group"
            >
                <NuxtLink to="/">
                    <NuxtImg
                        src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
                        class="max-w-xs group-hover:scale-110 transition duration-300 ease-in-out w-full rounded-lg"
                        alt="Louvre"
                        loading="lazy"
                    />

                    <h3 class="text-gray-500 mt-3 text-base tracking-widest title-font mb-1 capitalize">
                        Category Test {{ item }}
                    </h3>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>
