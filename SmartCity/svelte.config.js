import adapter from '@sveltejs/adapter-vercel';
import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: sveltePreprocess(),

    kit: {
        adapter: adapter(),
        paths: {
            base: '/smartCity',  // Замените '/smartCity' на имя вашего репозитория
        },
    }
};

export default config;