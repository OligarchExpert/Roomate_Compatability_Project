const express = require("express");
const router = express.Router();

const { updatePreferences } = require("../controllers/userController");

router.put("/preferences", updatePreferences);

module.exports = router;