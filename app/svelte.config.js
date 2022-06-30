import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
        vite: {
           server: {
               host: '0.0.0.0',
                hmr: {
                  clientPort: 443,
                }
            }
        }
	}
};

export default config;
