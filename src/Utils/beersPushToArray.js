export const getNameBeersAndIndexToSend = (beers) => {
  const beerToSend = [];

  beers.forEach((beer, index) => beerToSend.push({ number: index + 1, name: beer.name }));
  return beerToSend;
};
