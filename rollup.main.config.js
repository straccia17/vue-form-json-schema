import { createEntries } from './rollup.config'

export default createEntries([
  { input: 'src/index.js', file: 'dist/vue-form-json-schema.esm.browser.js', format: 'es', browser: true, transpile: false, env: 'development' },
  { input: 'src/index.js', file: 'dist/vue-form-json-schema.esm.browser.min.js', format: 'es', browser: true, transpile: false, minify: true, env: 'production' },
  { input: 'src/index.js', file: 'dist/vue-form-json-schema.esm.js', format: 'es', env: 'development' },
  { input: 'src/index.js', file: 'dist/vue-form-json-schema.umd.js', format: 'umd', env: 'development' },
  { input: 'src/index.js', file: 'dist/vue-form-json-schema.umd.min.js', format: 'umd', minify: true, env: 'production' },
  { input: 'src/index.js', file: 'dist/vue-form-json-schema.common.js', format: 'cjs', env: 'development' }
])