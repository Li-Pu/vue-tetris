import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import postcssExtendRule from 'postcss-extend-rule'
import postcssMixins from 'postcss-mixins'
import postcssPresetEnv from 'postcss-preset-env'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        postcssExtendRule({}),
        postcssMixins({}),
        postcssPresetEnv({
          stage: 0
        })
      ]
    }
  }
})
