import {
  defineConfig,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import {
  presetEllipsis,
  presetIcon,
  presetSafearea,
  presetShortcuts,
  transformerWh,
} from '@bryce-loskie/unocss-preset-mini'

export default defineConfig({
  content: {
    pipeline: {
      include: [
        'src/**/*.{js,ts,vue}',
      ],
    },
  },
  theme: {
    colors: {
      primary: '#374EFC',
      black: '#252525',
      dim: '#eaeaea',
    },
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerWh,
  ],
  presets: [
    presetEllipsis,
    presetSafearea,
    presetShortcuts,
    presetUno(),
    presetIcon(),
  ],
})
