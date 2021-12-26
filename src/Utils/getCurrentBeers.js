export const getCurentsBeers = (beersArray, currentPage, beersPerPage = 5) => {
  const indexOfLastBeer = currentPage * beersPerPage;
  const indexOfFirstBeer = indexOfLastBeer - beersPerPage;
  const currentBeers = beersArray.slice(indexOfFirstBeer, indexOfLastBeer);

  return currentBeers;
};
