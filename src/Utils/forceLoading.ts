export const forceLoading = async (time: number) => {
  return await new Promise((resolve, _) =>
    setTimeout(() => {
      resolve('');
    }, time),
  );
};
