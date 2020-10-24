export const byPrice = (productPrice, filterPrice = "") => {
  let parsedPrice = parseInt(productPrice);
  switch (filterPrice) {
    case "<25":
      return parsedPrice < 25 ? true : false;
    case "25-50":
      return parsedPrice > 25 && parsedPrice < 50 ? true : false;
    case "50-100":
      return parsedPrice > 50 && parsedPrice < 100 ? true : false;
    case ">100":
      return parsedPrice > 100 || parsedPrice === 100 ? true : false;
    default:
      return true;
  }
};

export const byCategory = (productTagging, filterCategories) => {
  if (filterCategories.length === 0) {
    return true;
  }
  if (filterCategories.includes(productTagging)) {
    return true;
  } else {
    return false;
  }
};
