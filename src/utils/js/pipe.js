export const pipe = (...functions) => initialValue => {
  return functions.reduce((currentValue, currentFunction) => {
    return currentFunction(currentValue);
  }, initialValue);
};
