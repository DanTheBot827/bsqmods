import { join } from "path";
import { cwd } from "process";

/** The base path of the git repo */
export const repoDir = join(cwd(), "..", "..");

/** The path to the `source` dir. */
export const sourceCodeDir = join(repoDir, "source");

/** Path to the website public directory */
export const websiteBase = join(sourceCodeDir, "website", "public");

/** The path to the mods folder */
export const modsPath = join(repoDir, "mods");

/** The path to the so-info.json file */
export const soInfoPath = join(websiteBase, "so-info.json");

/** The path to the covers folder */
export const coversPath = join(websiteBase, "covers");

/** The path to the original covers folder */
export const originalCoversPath = join(websiteBase, "covers", "originals");

/** The path to the mod-metadata.json file */
export const modMetadataPath = join(websiteBase, "mod-metadata.json");

/** The path to the qmod download cache */
export const qmodsPath = join(sourceCodeDir, "scripts", "qmods");

/** The path to the combined mods.json file */
export const allModsPath = join(websiteBase, "mods.json");

/** The path to the combined and grouped mods-grouped.json file */
export const groupedModsPath = join(websiteBase, "mods-grouped.json");

/** The path to the versions.json file */
export const versionsModsPath = join(websiteBase, "versions.json");

/** The path to the versioned mod json files */
export const qmodRepoDirPath = join(websiteBase, "mods");

/** The path to the imported.json file used to track which core mods have been imported */
export const importedCoreModsInfo = join(modsPath, "imported.json");

/** The path to the changed files text file.  Used during PR checks. */
export const changedFilesPath = join(repoDir, "changed-files.txt");

/** The path to the mod blacklist file. */
export const modBlacklistPath = join(modsPath, "updater-repo-blacklist.txt");

/** The path to the libraries file. */
export const modLibrariesPath = join(modsPath, "libraries.txt");

/** The path to the funding json file. */
export const fundingInfoPath = join(websiteBase, "funding-info.json");

/** The path to the mod-mirror directory. */
export const modMirrorPath = join(repoDir, "mod-mirror");

/** The path to the mod-mirror metadata. */
export const modMirrorMetadataPath = join(modMirrorPath, "metadata.json");
