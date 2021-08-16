import vite from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

export default vite.defineConfig({
	plugins: [reactRefresh(), vanillaExtractPlugin()],
})