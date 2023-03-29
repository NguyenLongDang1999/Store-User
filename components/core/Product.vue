<script setup lang="ts">

// ** Props & Emits
interface Props {
    item: number
}

defineProps<Props>()
</script>

<template>
    <div class="group relative mt-0 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <NuxtLink
            class="relative flex h-60 overflow-hidden rounded-lg"
            to="/"
        >
            <NuxtImg
                class="object-cover w-full group-hover:scale-110 transition duration-300 ease-in-out"
                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="product image"
            />

            <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39%</span>

            <div class="absolute top-0 right-0 m-2 scale-100 lg:scale-0 group-hover:scale-100 transition duration-150 ease-in-out">
                <button
                    type="button"
                    data-te-toggle="modal"
                    data-te-target="#productQuickView"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    class=" mb-2 inline-block bg-primary-500 hover:bg-primary-600 rounded-full p-2 text-xs font-medium leading-normal text-white transition duration-150 ease-in-out"
                >
                    <NuxtIcon
                        class="text-xl mr-0"
                        name="eye"
                        filled
                    />
                </button>
            </div>
        </NuxtLink>

        <div class="mt-4 px-3 pb-5">
            <h3 class="text-gray-500 text-sm title-font mb-1 capitalize mb-2 truncate">
                Category Test {{ item }}
            </h3>

            <NuxtLink
                to="/"
                class="transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700"
                data-te-toggle="tooltip"
                title="Hi! I'm tooltip"
            >
                <h5 class="text-sm font-medium title-font tracking-tight text-slate-900 capitalize line-clamp-2 transition duration-150 ease-in-out hover:text-primary">
                    Nike Air MX Super 2500 - Red Nike Air MX Super 2500 - Red Nike Air MX Super 2500 - Red Nike Air MX Super 2500 - Red
                </h5>
            </NuxtLink>

            <div class="mt-2 mb-5 flex items-center justify-between">
                <p>
                    <span class="text-3xl font-bold text-slate-900">$449</span>
                    <span class="text-sm text-slate-900 line-through">$699</span>
                </p>
            </div>

            <div class="mt-2 flex items-center">
                <NuxtIcon
                    v-for="(star) in 5"
                    :key="star"
                    name="star"
                    class="text-yellow-500"
                    filled
                />

                <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
            </div>
        </div>

        <div class="grid grid-cols-2">
            <a
                href="#"
                class="flex items-center justify-center bg-slate-100 transition duration-150 ease-in-out px-5 py-2.5 text-center text-sm font-medium text-slate-500 border-r-2 hover:bg-slate-200"
            >
                <NuxtIcon
                    class="text-xl"
                    name="cart"
                    filled
                />
            </a>

            <a
                href="#"
                class="flex items-center justify-center bg-slate-100 px-5 transition duration-150 ease-in-out py-2.5 text-center text-sm font-medium text-slate-500 hover:bg-slate-200"
            >
                <NuxtIcon
                    class="text-xl mr-0"
                    name="heart"
                    filled
                />
            </a>
        </div>

        <LazyCoreQuickView />
    </div>
</template>
