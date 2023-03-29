<template>
    <header class="bg-slate-100 font-normal text-slate-500 text-sm py-2.5">
        <div class="md:container md:mx-auto px-4">
            <div class="grid grid-cols-2">
                <a
                    href="tel:0389747179"
                    class="flex items-center"
                >
                    <NuxtIcon
                        class="mr-2"
                        name="phone"
                        filled
                    />

                    <span class="mb-0.5">0389747179</span>
                </a>

                <a
                    v-if="false"
                    href="#"
                    class="flex items-center justify-end hover:text-primary"
                >
                    <NuxtIcon
                        class="mr-2"
                        name="users"
                        filled
                    />

                    <span class="capitalize mb-0.5">{{ $t('User.Login') }} / {{ $t('User.Register') }}</span>
                </a>

                <div
                    v-else
                    class="relative flex items-center justify-end hover:text-primary"
                    data-te-dropdown-ref
                >
                    <a
                        id="dropdownMenuButton2"
                        class="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                        role="button"
                        href="#"
                        data-te-dropdown-toggle-ref
                        aria-expanded="false"
                    >
                        <NuxtImg
                            src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                            class="rounded-full"
                            style="height: 25px; width: 25px"
                            alt=""
                            loading="lazy"
                        />

                        <span class="capitalize ml-1 truncate md:block hidden">Nguyễn Long Đăng Nguyễn Long Đăng</span>

                        <span class="w-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="h-5 w-5"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                    </a>

                    <ul
                        class="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg [&[data-te-dropdown-show]]:block"
                        aria-labelledby="dropdownMenuButton2"
                        data-te-dropdown-menu-ref
                    >
                        <li>
                            <a
                                class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
                                href="#"
                                data-te-dropdown-item-ref
                            >Action</a>
                        </li>

                        <li>
                            <a
                                class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
                                href="#"
                                data-te-dropdown-item-ref
                            >Another action</a>
                        </li>

                        <li>
                            <a
                                class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
                                href="#"
                                data-te-dropdown-item-ref
                            >Something else here</a>
                        </li>

                        <hr class="my-2 h-0 border border-t-0 border-solid border-neutral-700 opacity-25">

                        <li>
                            <a
                                class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
                                href="#"
                                data-te-dropdown-item-ref
                            >Separated link</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>
