export const promiseMock = (data = '') => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        json: () =>
          Promise.resolve({
            data,
          }),
      });
    }, 200 + Math.random() * 300)
  );
};
