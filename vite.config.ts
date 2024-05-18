import { enhancedImages } from '@sveltejs/enhanced-img'
import { sveltekit } from '@sveltejs/kit/vite'
import icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [enhancedImages(), sveltekit(), icons({ compiler: 'svelte' })]
})
