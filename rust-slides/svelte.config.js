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
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Add mdsvex as a preprocessor for both .svelte and .md files
    extensions: ['.svelte', '.md'],
    preprocess: [
        vitePreprocess(),
        mdsvex({
            extensions: ['.md']
        })
    ],

    kit: {
        // Use the static adapter
        adapter: adapter({
            // Change the output directory from "build" to "docs"
            pages: 'docs',
            assets: 'docs',
            fallback: 'index.html',
            precompress: false,
            strict: true
        }),
        
        // This is crucial for GitHub Pages to work. 
        // We'll set the BASE_PATH environment variable in our GitHub Actions workflow.
        paths: {
            base: dev ? '' : process.env.BASE_PATH,
        },
        
        // This makes sure all pages are prerendered.
        prerender: {
            handleHttpError: ({ path, referrer, message, status }) => {
                // Ignore 404s from missing assets.
                if (status === 404) return;
                
                // Otherwise, throw an error to fail the build.
                throw new Error(message);
            }
        },
    }
};

export default config;