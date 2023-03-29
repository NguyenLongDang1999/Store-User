<script setup lang="ts">

// ** Third Party Imports
import type { Options } from '@splidejs/vue-splide'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'

// ** Data
const main   = ref<InstanceType<typeof Splide>>()
const thumbs = ref<InstanceType<typeof Splide>>()

const mainOptions: Options = {
    type      : 'loop',
    perPage   : 1,
    perMove   : 1,
    pagination: false
}

const thumbsOptions: Options = {
    type        : 'slide',
    rewind      : true,
    gap         : '1rem',
    pagination  : false,
    fixedWidth  : 110,
    fixedHeight : 70,
    cover       : true,
    focus       : 'center',
    isNavigation: true,
    updateOnMove: true
}

const slides = generateSlides()

onMounted( () => {
    const thumbsSplide = thumbs.value?.splide

    if (thumbsSplide) {
        main.value?.sync(thumbsSplide)
    }
})
</script>

<template>
    <div
        id="productQuickView"
        data-te-modal-init
        class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        tabindex="-1"
        aria-labelledby="productQuickViewLabel"
        aria-modal="true"
        role="dialog"
    >
        <div
            data-te-modal-dialog-ref
            class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px] min-[1200px]:max-w-[1140px]"
        >
            <div class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                <div class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4">
                    <h5
                        id="productQuickViewLabel"
                        class="text-xl font-medium leading-normal text-neutral-800"
                    >
                        Extra large modal
                    </h5>

                    <button
                        type="button"
                        class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        data-te-modal-dismiss
                        aria-label="Close"
                    >
                        <NuxtIcon name="close" />
                    </button>
                </div>

                <div class="relative p-4">
                    <div class="grid grid-cols-2">
                        <div>
                            <Splide
                                ref="main"
                                aria-labelledby="thumbnail-example-heading"
                                :options="mainOptions"
                            >
                                <SplideSlide
                                    v-for="slide in slides"
                                    :key="slide.alt"
                                >
                                    <img
                                        :src="slide.src"
                                        :alt="slide.alt"
                                    >
                                </SplideSlide>
                            </Splide>

                            <Splide
                                ref="thumbs"
                                aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
                                :options="thumbsOptions"
                            >
                                <SplideSlide
                                    v-for="slide in slides"
                                    :key="slide.alt"
                                >
                                    <img
                                        :src="slide.src"
                                        :alt="slide.alt"
                                    >
                                </SplideSlide>
                            </Splide>
                        </div>

                        <div>
                            ???
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
