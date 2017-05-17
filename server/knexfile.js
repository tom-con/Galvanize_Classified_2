// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'classified_dev',
    }
  },
  test: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'classified_test',
    }
  },
  "production": {
    "client": "pg",
    "connection": process.env.DATABASE_URL
  }

};
