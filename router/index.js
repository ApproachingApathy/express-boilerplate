const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	logger.debug(`[${req.url}]`);
	res.send("Express server.");
});

module.exports = router;
