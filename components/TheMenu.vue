<script setup lang="ts">

// ** Utils Imports
import NavItem from '~~/utils/navigations'

// ** useHook
const route = useRoute()
const localePath = useLocalePath()
</script>

<template>
    <nav class="bg-slate-100 font-normal text-slate-500 text-sm py-2.5">
        <div class="md:container md:mx-auto px-4">
            <ul
                class="mr-auto flex justify-center"
                data-te-navbar-nav-ref
            >
                <li
                    v-for="item in NavItem"
                    :key="item.title"
                    data-te-nav-item-ref
                >
                    <NuxtLink
                        class="block font-semibold capitalize transition duration-150 ease-in-out hover:text-neutral-700 p-2"
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
    </nav>
</template>
