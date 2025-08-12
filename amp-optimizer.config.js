module.exports = {
  // Configurações do AMP Optimizer
  optimization: {
    // Otimizações de CSS
    css: {
      // Minifica CSS
      minify: true,
      // Remove CSS não utilizado
      removeUnusedCss: true,
      // Inline CSS crítico
      inlineCriticalCss: true,
    },

    // Otimizações de imagens
    images: {
      // Otimiza imagens
      optimize: true,
      // Converte para WebP quando possível
      webp: true,
      // Lazy loading
      lazy: true,
    },

    // Otimizações de JavaScript
    js: {
      // Minifica JavaScript
      minify: true,
      // Remove código morto
      treeShake: true,
    },

    // Otimizações de HTML
    html: {
      // Minifica HTML
      minify: true,
      // Remove comentários
      removeComments: true,
      // Remove espaços em branco
      removeWhitespace: true,
    },
  },

  // Configurações de cache
  cache: {
    // Habilita cache
    enabled: true,
    // Tempo de vida do cache (em segundos)
    ttl: 3600,
  },

  // Configurações de compressão
  compression: {
    // Habilita compressão gzip
    gzip: true,
    // Habilita compressão brotli
    brotli: true,
  },

  // Configurações de segurança
  security: {
    // Habilita CSP (Content Security Policy)
    csp: true,
    // Habilita HTTPS
    https: true,
  },

  // Configurações de performance
  performance: {
    // Habilita preload de recursos críticos
    preload: true,
    // Habilita prefetch de recursos não críticos
    prefetch: true,
    // Habilita service worker
    serviceWorker: true,
  },
};
