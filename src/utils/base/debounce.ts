export const debounce = <T, R>(
  callback: (args: T) => Promise<R>,
  ms = 1000,
) => {
  let timeout: number;

  return (args: T): Promise<R> => {
    clearTimeout(timeout);

    return new Promise((resolve) => {
      timeout = setTimeout(() => resolve(callback(args)), ms);
    });
  };
};
