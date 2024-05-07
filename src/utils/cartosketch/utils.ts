export function createID(): string {
    return (new Date()).getTime().toString(36);
}
