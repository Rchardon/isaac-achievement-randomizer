// This is registered in "CheckErrors.ts".
// eslint-disable-next-line isaacscript/require-v-registration
export const v = {
  run: {
    afterbirthPlus: false,
    incompleteSave: false,
    otherModsEnabled: false,
    normalMode: false,
    normalGreedMode: false,
    onSetSeed: false,
    hasEasterEggs: false,
    onVictoryLap: false,
    lockedCharacter: false,
    lockedChallenge: false,
    lockedMode: false,
  },
};

export function hasErrors(): boolean {
  return Object.values(v.run).includes(true);
}
