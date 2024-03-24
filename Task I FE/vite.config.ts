import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'assets/*': path.resolve(__dirname, './src/assets/*'),
			assets: path.resolve(__dirname, './src/assets'),
			'components/*': path.resolve(__dirname, './src/components/*'),
			components: path.resolve(__dirname, './src/components'),
			'context/*': path.resolve(__dirname, './src/context/*'),
			context: path.resolve(__dirname, './src/context'),
			'hooks/*': path.resolve(__dirname, './src/hooks/*'),
			hooks: path.resolve(__dirname, './src/hooks'),
			'pages/*': path.resolve(__dirname, './src/pages/*'),
			pages: path.resolve(__dirname, './src/pages'),
			'scss/*': path.resolve(__dirname, './src/scss/*'),
			scss: path.resolve(__dirname, './src/scss'),
		},
	},
	plugins: [react(), svgr()],
})
