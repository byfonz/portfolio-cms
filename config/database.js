module.exports = ({ env }) => ({
    connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'yamanote.proxy.rlwy.net'),
      port: env.int('DATABASE_PORT', 45096),
      database: env('DATABASE_NAME', 'railway'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'ztbQvSeljJMzLlfcApYYmsNiIJdgYQzS'), // must be a plain string
      ssl: env.bool('DATABASE_SSL', false),
    },
    debug: false,
    pool: { min: 0, max: 7 },
  },
});