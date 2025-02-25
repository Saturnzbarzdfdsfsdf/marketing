import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
	root: 'src',
	// base: '/marketing',
	build: {
		emptyOutDir: true,
		outDir: '../dist',
	},
	plugins: [
		viteStaticCopy({
			targets: [
				{
					src: 'assets/images/**/*',
					dest: 'assets/images',
				},
			],
		}),
	],
})
