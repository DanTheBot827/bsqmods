import { Mod, modKeys } from "./types/Mod";
import { ModLoader } from "./types/ModLoader";

/**
 * Returns the mod with empty values set to nulls and keys presented in a specific order.
 * @param mod - The mod to process
 * @param keys - The keys to filter and process
 * @returns
 */
export function getStandardizedMod(mod: Mod, keys: (keyof Mod)[] = modKeys): Mod {
  const uniformMod: Partial<Mod> = {};

  // Normalize the mod object by trimming and setting empty strings to null
  for (const key of keys) {
    switch (key) {
      case "dependencies":
        uniformMod[key] = mod[key]?.toSorted((a, b) => a.id.localeCompare(b.id, undefined, { sensitivity: "base" })) || [];
        break;

      case "funding":
        uniformMod[key] = mod[key] || [];

        if (!(uniformMod[key] instanceof Array)) {
          uniformMod[key] = [uniformMod[key]];
        }

        break;

      case "modloader":
        uniformMod[key] = (mod[key]?.trim() as ModLoader) || ModLoader.Scotland2;
        break;

      case "isLibrary":
        uniformMod[key] = mod[key] === true;
        break;

      default:
        uniformMod[key] = (mod[key] || "").trim();
    }

    if (uniformMod[key] === "") {
      uniformMod[key] = null;
    }
  }

  return uniformMod as Mod;
}
