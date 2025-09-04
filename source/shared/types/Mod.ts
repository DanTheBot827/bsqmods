import { ModId, ModVersion, Sha1Hash, Url } from "./Aliases";
import { Dependency } from "./Dependency";
import { ModLoader } from "./ModLoader";

/**
 * Represents a mod.
 *
 * @example
 * ```json
 * {
 *   "name": "Lapiz",
 *   "description": "Lapiz makes modders' lives easier by exposing utilities to them cleanly. This mod does nothing on its own.",
 *   "id": "lapiz",
 *   "version": "0.2.13",
 *   "author": "Raine",
 *   "authorIcon": "https://avatars.githubusercontent.com/u/64136899?v=4",
 *   "modloader": "Scotland2",
 *   "download": "https://github.com/raineio/Lapiz/releases/download/v0.2.13/Lapiz.qmod",
 *   "source": "https://github.com/raineio/Lapiz/",
 *   "cover": null,
 *   "funding": [],
 *   "website": "https://github.com/raineio/Lapiz/",
 *   "hash": "2798b33142721386cce71f49ab02f8e328e57cf9"
 * }
 * ```
 */
export interface Mod {
  /**
   * The name of the mod.
   */
  name: string | null;

  /**
   * A description of what the mod does.
   */
  description?: string | null;

  /**
   * The {@link ModId id} of the mod.
   *
   * {@inheritDoc ModId}
   */
  id: ModId | null;

  /**
   * The {@link ModVersion version} of the mod.
   *
   * {@inheritDoc ModVersion}
   */
  version: ModVersion | null;

  /** The author(s) of the mod. */
  author: string | null;

  /**
   * The icon {@link Url url} of the primary author.
   *
   * {@inheritDoc Url}
   */
  authorIcon: Url | null;

  /**
   * The mod loader used by the mod.
   *
   * @see {@link ModLoader}
   */
  modloader: ModLoader | null;

  /**
   * The dependencies of the mod.
   */
  dependencies?: Dependency[];

  /**
   * A {@link Url direct link} to the .qmod file.
   *
   * {@inheritDoc Url}
   */
  download: Url | null;

  /**
   * A {@link Url link} to the source code for the mod.
   *
   * {@inheritDoc Url}
   */
  source: Url | null;

  /**
   * A {@link Url direct link} to a cover image.
   *
   * {@inheritDoc Url}
   */
  cover: Url | null;

  /**
   * A list of links to pages where people can donate some money.
   */
  funding: string[];

  /**
   * A {@link Url link} to a website for the mod.
   *
   * {@inheritDoc Url}
   */
  website: Url | null;

  /**
   * A {@link Sha1Hash SHA1 hash} of the download.
   *
   * {@inheritDoc Sha1Hash}
   */
  hash?: Sha1Hash | null;

  /**
   * A {@link Url direct link} to the original cover image.
   *
   * {@inheritDoc Url}
   */
  ogCover?: Url | null;

  /**
   * If the mod is a library.
   */
  isLibrary?: boolean;
}

/**
 * A list of mod keys for the combined json file.
 */
export const modKeys: (keyof Mod)[] = [
  "name",
  "description",
  "id",
  "version",
  "author",
  "authorIcon",
  "modloader",
  "download",
  "dependencies",
  "isLibrary",
  "source",
  "cover",
  "ogCover",
  "funding",
  "website",
  "hash"
];

/**
 * A list of mod keys to be excluded from the split json files.
 */
const splitModExcludedKeys: (keyof Mod)[] = ["ogCover", "hash", "isLibrary"];

/**
 * A list of mod keys for the split json files.
 */
export const splitModKeys: (keyof Mod)[] = modKeys.filter((key) => !splitModExcludedKeys.includes(key));
