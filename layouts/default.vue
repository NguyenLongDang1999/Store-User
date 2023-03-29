<template>
    <TheHeader />
    <TheNavbar />
    <TheMenu />

    <main class="my-10">
        <slot />
    </main>

    <LazyTheFooter />
</template>
