export type AsyncResponse<T> = Promise<{
    data?: T;
    error?: Error | null;
    message?: string;
    success: boolean;
}>;