import { defineConfig, presetIcons, presetUno } from 'unocss'

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
  shortcuts: [
    ['wh-full', 'w-full h-full'],
  ],
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
})
