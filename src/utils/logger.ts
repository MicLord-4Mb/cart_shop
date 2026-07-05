export function createProxyLogger<T extends object>(target: T, serviceName: string): T {
  return new Proxy(target, {
    get(obj, prop: string | symbol, receiver) {
      const origProperty = Reflect.get(obj, prop, receiver);

      if (typeof origProperty === 'function') {
        return function (...args: unknown[]) {
          const methodName = String(prop);
          const label = `[${serviceName}] ${methodName}`;

          console.groupCollapsed(label);
          console.info('Arguments:', args);

          const startTime = performance.now();
          try {
            const result = origProperty.apply(obj, args);

            if (result instanceof Promise) {
              return result
                .then((res) => {
                  const duration = (performance.now() - startTime).toFixed(2);
                  console.info('Result (Promise):', res);
                  console.debug(`Execution time: ${duration} ms`);
                  console.groupEnd();
                  return res;
                })
                .catch((err) => {
                  console.error('Error Promise:', err);
                  console.groupEnd();
                  throw err;
                });
            }

            const duration = (performance.now() - startTime).toFixed(2);
            console.info('Result:', result);
            console.debug(`Execution time: ${duration} ms`);
            console.groupEnd();

            return result;
          } catch (error) {
            console.error('Critical error:', error);
            console.groupEnd();
            throw error;
          }
        };
      }

      return origProperty;
    },
  });
}