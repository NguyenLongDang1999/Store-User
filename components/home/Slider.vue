<script setup lang="ts">

// ** Third Party Imports
import type { Options } from '@splidejs/vue-splide'
import { SplideSlide, SplideTrack } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'

// ** Data
const options: Options = {
    rewind  : true,
    autoplay: true
}

const slides = generateSlides()
</script>

<template>
    <section class="section-slider mb-20">
        <div class="grid grid-cols-1">
            <Splide
                aria-label="Slider Images"
                :options="options"
                :has-track="false"
            >
                <SplideTrack>
                    <SplideSlide
                        v-for="slide in slides"
                        :key="slide.alt"
                    >
                        <NuxtImg
                            :src="slide.src"
                            :alt="slide.alt"
                            class="w-full"
                            width="1200"
                            height="600"
                            format="webp"
                            fit="cover"
                            placeholder
                            loading="lazy"
                        />
                    </SplideSlide>
                </SplideTrack>
            </Splide>
        </div>
    </section>
</template>
