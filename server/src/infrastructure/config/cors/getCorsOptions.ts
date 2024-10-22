export const getCorsOptions = (environment: unknown) =>
  environment === 'development'
    ? {
        allowedHeaders: 'Content-Type,Authorization',
        credentials: true,
        methods: 'DELETE,GET,POST,PUT',
        origin: '*',
      }
    : {
        allowedHeaders: 'Content-Type,Authorization',
        credentials: true,
        methods: 'DELETE,GET,POST,PUT',
        origin: process.env.CLIENT_URL,
      };
