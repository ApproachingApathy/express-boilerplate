const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
	logger.debug(`Route: ${req.url}`);
	next();
});

router.get("/", (req, res) => {
	res.render("index");
});

// 404 Error
router.get("*", (req, res) => {
	res.statusCode = 404;
	res.render("404", {
		route: req.url
	});
});

module.exports = router;
