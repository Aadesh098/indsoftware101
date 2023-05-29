module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "frame-src": [
            "'self'",
            "youtube.com",
            "www.youtube.com",
            "vimeo.com",
            "*.vimeo.com",
            "facebook.com",
            "www.facebook.com"
          ],
          "connect-src": ["'self'", "https:"], // Added connect-src directive
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "*.digitaloceanspaces.com"
          ], // Added img-src directive
          "media-src": ["'self'", "data:", "blob:"], // Added media-src directive
          "upgradeInsecureRequests": null, // Added upgradeInsecureRequests directive
        }
      }
    }
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public'
];
