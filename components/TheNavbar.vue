<template>
    <div>
        <div class="md:container md:mx-auto px-4">
            <div class="grid grid-cols-7 my-10">
                <div class="block self-center md:col-span-2 col-span-4">
                    <div class="flex items-center">
                        <button
                            type="button"
                            data-te-offcanvas-toggle
                            data-te-target="#offcanvasExample"
                            aria-controls="offcanvasExample"
                        >
                            <NuxtIcon
                                class="text-3xl md:hidden block"
                                name="bars-3"
                                filled
                            />
                        </button>

                        <NuxtLink
                            to="/"
                            class="md:ml-0 ml-4 mb-0.5"
                        >
                            <NuxtImg
                                src="https://portotheme.com/html/molla/assets/images/demos/demo-4/logo.png"
                                alt="Logo"
                            />
                        </NuxtLink>
                    </div>
                </div>

                <div class="flex justify-center self-center md:col-span-4 md:block hidden">
                    <div class="xl:w-[40rem]">
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
                    </div>
                </div>

                <div class="flex justify-end self-center md:col-span-1 col-span-3">
                    <div class="relative inline-flex w-fit cursor-pointer mr-6 transition duration-150 ease-in-out hover:text-primary">
                        <div class="absolute top-0 right-0 bottom-auto left-auto z-10 inline-block translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-primary py-1 px-2.5 text-center align-baseline text-xs font-bold leading-none text-white">
                            0
                        </div>

                        <NuxtIcon
                            class="text-3xl"
                            name="heart"
                            filled
                        />
                    </div>

                    <div class="relative inline-flex w-fit cursor-pointer transition duration-150 ease-in-out hover:text-primary">
                        <div class="absolute top-0 right-0 bottom-auto left-auto z-10 inline-block translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-primary py-1 px-2.5 text-center align-baseline text-xs font-bold leading-none text-white">
                            0
                        </div>

                        <NuxtIcon
                            class="text-3xl"
                            name="shopping-cart"
                            filled
                        />
                    </div>
                </div>
            </div>
        </div>

        <LazyTheMobileMenu />
    </div>
</template>
