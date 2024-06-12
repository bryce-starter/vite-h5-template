import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    formatters: true,
  },
  {
    rules: {
      'antfu/top-level-function': 'off',
      'no-console': 'off',
    },
  },
)
