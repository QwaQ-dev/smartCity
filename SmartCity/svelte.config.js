import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
export default {
	kit: {
		adapter: adapter({
			fallback: 'index.html', // Указываем fallback для динамических маршрутов
			out: 'build',           // Путь для сборки
		}),
		prerender: {
			entries: ['/', '/news', '/reg'],
		},
		paths: {
			base: '/smartCity',
		},
	},
};
