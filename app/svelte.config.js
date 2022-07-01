import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
            split: false
        }),
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
