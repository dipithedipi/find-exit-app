<template>
    <div class="container mx-auto">
        <div class="">
            <div class="flex justify-center">
                <div class="hero bg-base-200">
                    <div class="hero-content flex-col lg:flex-row rounded-xl">
                        <img src="../../public/palazzina-centrale.jpg" class="max-w-sm rounded-lg shadow-2xl" />
                        <div class="px-3">
                            <h1 class="text-5xl font-bold">Edificio Centrale</h1>
                            <div class="pt-4 sm:pt-8">
                                <button class="w-full rounded-2xl btn btn-primary" @click="$router.push('/classrooms/centrale')">
                                    Aule
                                    <span class="material-symbols-outlined">
                                        expand_circle_right
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col pb-2 w-11/12 mx-auto">
                <div class="divider divider-neutral text-xl">Palazzine</div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-8 place-items-center place-content-stretch w-4/5 mx-auto">
                <div class="border-gray-700 card card-compact w-96 bg-base-100 shadow-xl border-2 ">
                    <figure class="rounded-xl"><img src="../../public/palazzine.jpg" /></figure>
                    <div class="grid grid-cols-2">
                        <h2 class="card-title pl-5">Informatica</h2>
                        <div class="card-actions place-self-end p-3">
                            <button class="btn rounded-2xl btn-primary" @click="$router.push('/classrooms/informatica')">
                                Aule
                                <span class="material-symbols-outlined">
                                    expand_circle_right
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="border-gray-700 card card-compact w-96 bg-base-100 shadow-xl border-2">
                    <figure class="rounded-xl"><img src="../../public/palazzine.jpg" /></figure>
                    <div class="grid grid-cols-2">
                        <h2 class="card-title pl-5">Meccanica</h2>
                        <div class="card-actions place-self-end p-3">
                            <button class="btn rounded-2xl btn-primary" @click="$router.push('/classrooms/meccanica')">
                                Aule
                                <span class="material-symbols-outlined">
                                    expand_circle_right
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="border-gray-700 card card-compact w-96 bg-base-100 shadow-xl border-2">
                    <figure class="rounded-xl"><img src="../../public/palazzine.jpg" /></figure>
                    <div class="grid grid-cols-2">
                        <h2 class="card-title pl-5">Elettronica</h2>
                        <div class="card-actions place-self-end p-3">
                            <button class="btn rounded-2xl btn-primary" @click="$router.push('/classrooms/elettronica')">
                                Aule
                                <span class="material-symbols-outlined">
                                    expand_circle_right
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="border-gray-700 card card-compact w-96 bg-base-100 shadow-xl border-2">
                    <figure class="rounded-xl"><img src="../../public/palazzine.jpg" /></figure>
                    <div class="grid grid-cols-2">
                        <h2 class="card-title pl-5">Tessile</h2>
                        <div class="card-actions place-self-end p-3">
                            <button class="btn rounded-2xl btn-primary" @click="$router.push('/classrooms/tessile')">
                                Aule
                                <span class="material-symbols-outlined">
                                    expand_circle_right
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col pt-4 w-11/12 mx-auto">
                <div class="divider divider-neutral text-xl">Palestre</div>
            </div>
            <div class="flex justify-center pb-8">
                <div class="hero bg-base-200">
                    <div class="hero-content flex-col lg:flex-row">
                        <img src="../../public/palestra.png" class="max-w-sm rounded-lg shadow-2xl" />
                        <div class="px-3">
                            <h1 class="text-5xl font-bold">Edificio delle Palestre</h1>
                            <div class="pt-4 sm:pt-8">
                                <button class="w-full rounded-2xl btn btn-primary" @click="$router.push('/classrooms/palestre')">
                                    Aule
                                    <span class="material-symbols-outlined">
                                        expand_circle_right
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>