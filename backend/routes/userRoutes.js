const express = require("express");
const router = express.Router();

const { updatePreferences, getAllUsers } = require("../controllers/userController");

router.put("/preferences", updatePreferences);
router.get("/", getAllUsers);

module.exports = router;