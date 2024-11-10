import adapter from '@sveltejs/adapter-auto';

import('@sveltejs/kit').Config
const config = {
	kit: {
		paths: {
			base: '/smartCity',
		},
		// If you are not using a .nojekyll file, change your appDir to something not starting with an underscore.
		// For example, instead of '_app', use 'app_', 'internal', etc.
		appDir: 'src',
	}
};

export default config;
