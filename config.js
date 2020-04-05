const env = process.env.NODE_ENV;

const dev = {
  app: {
    port: parseInt(process.env.PORT) || 3001
  },
  db: {
    host:
      process.env.DB_HOST || "linkapi:ABC123def456@cluster0-pqitn.mongodb.net",
    port: process.env.DB_PORT || 27017,
    name: process.env.DB_NAME || "zedelivery"
  }
};

const test = {
  app: {
    port: parseInt(process.env.PORT) || 3001
  },
  db: {
    host:
      process.env.DB_HOST_TEST ||
      "linkapi:ABC123def456@cluster0-pqitn.mongodb.net",
    port: process.env.DB_PORT_TEST || 27017,
    name: process.env.DB_NAME_TEST || "zedelivery_test"
  }
};

const config = {
  dev,
  test
};

module.exports = config[env];
