export type AsyncResponse<T> = Promise<T | {
  data?: T;
  error?: Error | null;
  message?: string;
  success: boolean;
}>;

export type Resolver = {
  Queries?: Record<string, (...args: any[]) => AsyncResponse<any>>;
  Mutations?: Record<string, (...args: any[]) => AsyncResponse<any>>;
};