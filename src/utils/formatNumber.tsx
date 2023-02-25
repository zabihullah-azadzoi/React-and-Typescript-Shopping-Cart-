export const formatNumber = (number: number): string => {
  const formattedNumber = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(number));

  return formattedNumber;
};
