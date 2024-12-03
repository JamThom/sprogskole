function merge<T>(objects: Partial<T>[]): T {
  const result: Partial<T> = {};

  objects.forEach(obj => {
    Object.keys(obj).forEach((key) => {
        const value = obj[key as keyof T];
        const accumulator = result[key as keyof T];
      if (typeof value === 'object' && value !== null) {
        if (!result[key as keyof T]) {
          result[key as keyof T] = {} as any;
        }
        result[key as keyof T] = merge<any>([result[key as keyof T] as any, value]) as any;
      } else {
        result[key as keyof T] = value;
      }
    });
  });

  return result as T;
}

export default merge;