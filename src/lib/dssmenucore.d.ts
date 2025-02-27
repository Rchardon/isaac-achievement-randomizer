export function init(
  this: void,
  dssModName: string,
  dssCoreVersion: number,
  v: unknown,
): DSSMod;

// ts-prune-ignore-next
interface DSSMod extends Mod {
  runMenu: () => void;
  openMenu: () => void;
  closeMenu: (fullClose: boolean, noAnimate: boolean) => void;
  setEnabled: (enabled: boolean) => void; // A custom added function to work around DSS bugs.

  gamepadToggleButton: unknown;
  menuKeybindButton: unknown;
  paletteButton: unknown;
  menuHintButton: unknown;
  menuBuzzerButton: unknown;
}
