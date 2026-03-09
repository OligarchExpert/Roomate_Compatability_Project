const User = require("../models/User");
const calculateCompatibility = require("../utils/compatibility");

exports.getBestMatch = async (req, res) => {
  try {
    const userId = req.params.userId;

    const users = await User.find();
    const currentUser = users.find(u => u._id.toString() === userId);

    let bestMatch = null;
    let bestScore = -1;

    for (let user of users) {
      if (user._id.toString() === userId) continue;

      const score = calculateCompatibility(currentUser, user);

      if (score > bestScore) {
        bestScore = score;
        bestMatch = user;
      }
    }

    res.json({
      bestMatch,
      score: bestScore
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};