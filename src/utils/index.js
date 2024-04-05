export const getError = (name, errors) => {
  if (!Object.keys(errors).length) return undefined;

  return name
    .split(".")
    .map((item) => item.replaceAll("[", "").replaceAll("]", ""))
    .reduce((prev, curr) => (prev ? prev[curr] : prev), errors);
};
