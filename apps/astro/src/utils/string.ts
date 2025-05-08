export const kebabToString = (str: string) =>
  str
    .split("-")
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join(" ");

export const kebabToPascal = (str: string) =>
  str
    .split("-")
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join("");

export const pascalToKebab = (str: string) =>
  str.replace(/([a-z0–9])([A-Z])/g, "$1-$2").toLowerCase();

export const dotToKebab = (str: string) => str.split(".").join("-");

export const capitalize = (str: string) =>
  `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
