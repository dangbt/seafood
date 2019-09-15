const enableApiExplorer = process.env.ENABLE_API_EXPLORER === 'true'

module.exports = {
  'loopback-component-explorer': enableApiExplorer
    ? {
      mountPath: '/explorer',
      generateOperationScopedModels: true
    }
    : null
}
