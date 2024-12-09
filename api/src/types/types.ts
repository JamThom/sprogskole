export type AsyncResponse<T> = Promise<T | {
  data?: T;
  error?: Error | null;
  message?: string;
  success: boolean;
}>;