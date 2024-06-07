<template>
    <header class="bg-purple-900 text-white w-full py-6 px-20 flex items-center justify-between">
        <h1>
            <router-link to="/" class="text-4xl font-bold underline underline-offset-8">
                Find A Coach
            </router-link>

        </h1>

        <ul class="flex items-center gap-x-10">
            <li><router-link to="/coaches"
                    class="px-3 py-2.5 rounded-lg border-2 hover:border-none font-medium border-purple-400 text-white hover:text-purple-400 hover:bg-white ease-in  duration-300">Coaches</router-link>
            </li>
            <li><router-link to="/requests"
                    class="px-3 py-2.5 rounded-lg border-2 hover:border-none font-medium border-purple-400 text-white hover:text-purple-400 hover:bg-white ease-in  duration-300">Requests</router-link>
            </li>
        </ul>
    </header>
</template>
