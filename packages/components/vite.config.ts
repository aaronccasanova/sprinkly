import { getLibraryConfig } from '../../config'
import {vanillaExtractPlugin} from '@vanilla-extract/vite-plugin'

import pkg from './package.json'

export default getLibraryConfig(pkg, {
	plugins: [vanillaExtractPlugin()],
})