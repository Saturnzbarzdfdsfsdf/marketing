import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
	root: 'src',
	base: '/marketing',
	build: {
		outDir: '../dist',
	},
	plugins: [
		viteStaticCopy({
			targets: [
				{
					src: 'src/assets/*',
					dest: 'assets/images',
				},
			],
		}),
	],
})
