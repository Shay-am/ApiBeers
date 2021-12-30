export const convertObjectToString = (ingredients) => {
  if (typeof ingredients === 'object') return Object.keys(ingredients).join(', ');

  return ingredients;
};
