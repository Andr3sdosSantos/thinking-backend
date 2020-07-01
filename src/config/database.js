const databaseSecret = require('../utils/databaseSecret');

module.exports = {
  development: {
    host: databaseSecret.host,
    username: databaseSecret.username,
    dialect: 'postgres',
    password: databaseSecret.password,
    database: databaseSecret.database,
    port: databaseSecret.port,
    define: {
      timestamps: true,
      underscored: true,
    },
  },
};
