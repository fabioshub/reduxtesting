export const pageCalculator = (pageNumber, pageAmount) => {
    const one = 1;
    const newNumber  = pageNumber - one;
    return newNumber * pageAmount + 1;
    // page numbers given in 1, 2, 3, 4 however, query only take 1, 11, 21, 32 so map 1 to 1, 2 to 11, 3 to 21 etc
    // MOET EIGENLIJK NAAR API / BACKEND
  }