export type AsyncResponse<T> = Promise<{
    data?: T;
    error?: Error | null;
    message?: string;
    success: boolean;
}>;

export type Resolver = {
    queries?: Record<string, (...args:any[]) => AsyncResponse<any>>;
    mutations?: Record<string, (...args:any[]) => AsyncResponse<any>>;
};