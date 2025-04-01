export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'market-assets.strapi.io', 'res.cloudinary.com'],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'res.cloudinary.com',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      origin: [ 
        '*',
        'https://iqea-estimador.vercel.app/',
        'http://localhost:5173/', 
        'iqea.mx',
         process.env.SITE_URL,
         process.env.SITE_URL_INT,
         process.env.STRAPI_DOMAIN,
        process.env.SITE_ESTIMADOR,
       ],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      keepHeaderOnError: true,
    }
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
