module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/contact',
        '/admin',
        '/login'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
