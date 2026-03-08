function calculateCompatibility(userA, userB) {
  let score = 0;

  if (userA.preferences.sleepTime === userB.preferences.sleepTime)
    score += 10;

  score += 5 - Math.abs(
    userA.preferences.noiseTolerance -
    userB.preferences.noiseTolerance
  );

  if (userA.preferences.studyHabit === userB.preferences.studyHabit)
    score += 10;

  score += 5 - Math.abs(
    userA.preferences.studySilenceStrictness -
    userB.preferences.studySilenceStrictness
  );

  if (userA.preferences.groupStudyPreference === userB.preferences.groupStudyPreference)
    score += 5;

  if (userA.preferences.sharingItemsComfort === userB.preferences.sharingItemsComfort)
    score += 5;

  if (userA.preferences.fanVsAcPreference === userB.preferences.fanVsAcPreference)
    score += 5;

  score += 5 - Math.abs(
    userA.preferences.messToleranceLevel -
    userB.preferences.messToleranceLevel
  );

  if (userA.preferences.gamingPreference === userB.preferences.gamingPreference)
    score += 5;

  score += 5 - Math.abs(
    userA.preferences.academicCompetitiveness -
    userB.preferences.academicCompetitiveness
  );

  return score;
}

module.exports = calculateCompatibility;
