const config = require("./config");
const app = require("./src/app");

app.listen(config.app.port, () => {
  console.log(`app listening on port ${config.app.port}`);
});
