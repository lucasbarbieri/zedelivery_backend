const config = require("./config");

const { host, port, name } = config.db;
const connectionString = `mongodb+srv://${host}/${name}?retryWrites=true&w=majority`;

module.exports = connectionString;
