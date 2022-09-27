import { defineConfig } from 'tsup'

export default defineConfig(() => {
  return {
    entry: ['src/index.ts'],
    sourcemap: true,
    format: ['cjs', 'esm'],
    dts: true,
    external: ['react'],
    minify: true,
    outExtension({ format }) {
      return {
        js: `.${format}.js`
      }
    }
  }
})
