import path from 'path'
import merge from 'deepmerge'
import vite from 'vite'

/**
 * Build configuration for a Vite library.
 */
const libraryConfig = vite.defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
    },
  }
})

const rootPkg = require(path.resolve(__dirname, '../package.json'))

/**
 * Override options for a Vite library build.
 */
export type LibraryConfigOptions = Omit<vite.UserConfig, 'build'> & {
  build?: Omit<vite.BuildOptions, 'lib'> & {
    lib?: Omit<vite.LibraryOptions, 'entry'> & {
      entry?: string
    }
  }
}

/**
 * Minimum package.json properties to build a sprinkly Vite library.
 */
interface Pkg {
  name: string
  peerDependencies?: {
    [key: string]: string
  }
}

/**
 * Returns Vite build configuration for library packages.
 * Optionally amended with the specified `options` parameter.
 * @param options Custom build options
 * @returns Vite build configuration
 */
export function getLibraryConfig<LibPkg extends Pkg>(
  libPkg: LibPkg,
  options: LibraryConfigOptions = {},
) {
  /** Name of the library package: e.g. '@sprinkly/tokens' => 'tokens' */
  const name = libPkg.name.split('/')[1]

  console.log(`Building library package ${name} v.${rootPkg.version} ...`)

  // Format output file names
  const formatOutputs: LibraryConfigOptions = !name
    ? {}
    : {
        build: {
          lib: {
            fileName: (format) => `sprinkly.${name}.${format}.js`,
          },
        },
      }

  const excludePeerDeps = !Object.keys(libPkg?.peerDependencies || {}).length
    ? {}
    : {
        build: {
          rollupOptions: {
            external: Object.keys(libPkg?.peerDependencies || {}),
          },
        },
      }

  const result = merge.all([
    libraryConfig,
    formatOutputs,
    excludePeerDeps,
    options,
  ])

  // Handy when you need to peek into that final build configuration
  // when things go berserk ;-)
  // console.warn(JSON.stringify(result, null, 2))

  return result
}

