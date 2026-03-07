const User = require("../models/User");

exports.updatePreferences = async (req, res) => {
  try {
    const { userId, preferences } = req.body;

    const user = await User.findByIdAndUpdate(
      userId,
      { preferences },
      { new: true }
    );

    res.json({
      message: "Preferences updated successfully",
      user
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};