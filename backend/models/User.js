const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  preferences: {
    sleepTime: Number,
    noiseTolerance: Number,
    studyHabit: String,
    studySilenceStrictness: Number,
    groupStudyPreference: Boolean,
    sharingItemsComfort: Boolean,
    fanVsAcPreference: String,
    messToleranceLevel: Number,
    gamingPreference: Boolean,
    academicCompetitiveness: Number
  }
});

module.exports = mongoose.model("User", userSchema);