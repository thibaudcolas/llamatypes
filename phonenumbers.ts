// @ts-ignore
export const isProbablyMobile = (number) => {
  const nationalNumber = number.replace(/\s+/, "").replace("+44", "0");
  return nationalNumber.startsWith("07");
};
