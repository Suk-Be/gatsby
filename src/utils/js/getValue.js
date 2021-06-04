export const getValue = DomNodes => {
  // constructor plus executor
  return new Promise((resolve, reject) => {
    if (DomNodes) {
      resolve(DomNodes); // fulfilledPromise
    } else {
      const errorReason = new Error();
      reject(errorReason); // reject
    }
  });
};
