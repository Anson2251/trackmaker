import localforage from "localforage";

export const versionIdentifierStoage = localforage.createInstance({ name: "trackmaker_db_version-identifiers" });

export async function initStorage(space: string, versionIdentifier: string, currentVersion: string) {
    const currentVersionDB = await versionIdentifierStoage.getItem<string>(versionIdentifier);
    if(currentVersionDB !== currentVersion) throw Error(`Database version is not matched. Table ${space}, Request version: ${currentVersionDB}, Current version: ${currentVersion}]`);
    return localforage.createInstance({ name: space });
}
