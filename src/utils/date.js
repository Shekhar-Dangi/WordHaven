export const getDate = (givenDate) => {
  const date = new Date(givenDate);

  const options = {
    year: "numeric",
    month: "short", // You can use "long" for full month name
    day: "numeric",
  };

  const localDateString = date.toLocaleDateString(undefined, options);
  return localDateString;
};
