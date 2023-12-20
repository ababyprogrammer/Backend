export type Safe<T> =
    | {
        success: true;
        data: T;
    }
    | {
        success: false;
        error: string;
    };