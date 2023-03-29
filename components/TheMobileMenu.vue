<script setup lang="ts">

// ** Utils Imports
import NavItem from '~~/utils/navigations'

// ** useHook
const route = useRoute()
const localePath = useLocalePath()
</script>

<template>
    <div
        id="offcanvasExample"
        class="invisible fixed bottom-0 top-0 left-0 z-[1045] flex w-96 max-w-full -translate-x-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out [&[data-te-offcanvas-show]]:transform-none"
        tabindex="-1"
        aria-labelledby="offcanvasExampleLabel"
        data-te-offcanvas-init
    >
        <div class="flex items-center justify-between p-4">
            <h5
                id="offcanvasExampleLabel"
                class="mb-0 font-semibold leading-normal"
            >
                Menu
            </h5>

            <button
                type="button"
                class="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-te-offcanvas-dismiss
            >
                <span
                    class="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </span>
            </button>
        </div>

        <div class="flex-grow overflow-y-auto p-4">
            <div class="relative flex w-full flex-wrap items-stretch">
                <input
                    type="search"
                    class="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-sm font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"
                    :placeholder="$t('Search.Product')"
                    aria-label="Search"
                    aria-describedby="button-search"
                >
                <button
                    id="button-search"
                    class="relative z-[2] flex items-center rounded-r bg-primary px-5 py-2.5 text-base font-medium leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                >
                    <NuxtIcon
                        name="search"
                        filled
                    />
                </button>
            </div>

            <ul
                class="mt-10"
                data-te-navbar-nav-ref
            >
                <li
                    v-for="item in NavItem"
                    :key="item.title"
                    data-te-nav-item-ref
                >
                    <NuxtLink
                        class="block font-semibold capitalize transition duration-150 ease-in-out hover:text-neutral-700 pb-4"
                        :class="route.path === item.to ? 'text-primary' : ''"
                        :to="localePath({ name: item.name })"
                        data-te-nav-link-ref
                        data-te-ripple-init
                        data-te-ripple-color="light"
                    >
                        {{ $t(`Navigation.${item.title}`) }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>
