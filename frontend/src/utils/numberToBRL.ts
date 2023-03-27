export const convertNumberToBRL = (number: number): string => {
  const f = number.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  return f;
};
