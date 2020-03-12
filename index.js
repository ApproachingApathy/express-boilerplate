const express = require("express");
const app = express();

// Move the config object to the global scope.
global.appConfig = require("./configs/config.json");

// Create a logger object and attach it to the global scope.
global.logger = require("./helpers/create-logger")();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(require("./router"));

app.listen(appConfig.PORT, () => {
	logger.info(
		`Server listening at http://${appConfig.HOSTNAME}:${appConfig.PORT}/`
	);
});
