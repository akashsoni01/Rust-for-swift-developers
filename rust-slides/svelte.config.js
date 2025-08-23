// import { mdsvex } from 'mdsvex';
// import adapter from '@sveltejs/adapter-static';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: { adapter: adapter() },
// 	preprocess: [mdsvex()],
// 	extensions: ['.svelte', '.svx']
// };

// export default config;

import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

const config = {
  kit: {
    adapter: adapter({
      fallback: 'index.html', // 👈 required for SPA mode on GitHub Pages
      strict: false
    }),
    prerender: {
      entries: ['*'] // prerender all pages
    },
  },
	preprocess: [mdsvex()],
	extensions: ['.svelte', '.svx'],

};

export default config;

