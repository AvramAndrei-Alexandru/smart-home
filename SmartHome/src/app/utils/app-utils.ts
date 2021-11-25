export class AppUtils {

    public static isNullOrUndefined(object: any): boolean {
        if (object === null || object === undefined) {
            return true;
        }
        return false;
    }
}