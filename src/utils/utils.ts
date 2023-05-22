import cloneDeep from "lodash/cloneDeep";
import { RupeeSymbol } from "./constants";
import { CollectionsType, FilterTypes } from "types/index.type";

export const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const isProd = (!process.env.NODE_ENV || process.env.NODE_ENV === "development") && window.env.ENVIRONMENT === "prod";

export const AddRupeeSymbol = (mrp: string | number | undefined | null, toFixed = 0, prependText = "") => {
  if (typeof mrp === "string") {
    const mrpNumber = (+mrp).toFixed(toFixed);
    return `${prependText}${RupeeSymbol} ${mrpNumber}`;
  } else if (typeof mrp === "number") {
    const mrpNumber = mrp.toFixed(toFixed);
    return `${prependText}${RupeeSymbol} ${mrpNumber}`;
  }
  return "";
};

export const DeepCopy = (item: any) => {
  return cloneDeep(item);
};

export const getUniqueValuesForGivenKey = (arr: Record<string, any>[], key: string) => {
  const valuesSet = new Set();

  arr.forEach((item) => {
    if (item[key] !== undefined) {
      valuesSet.add(item[key]);
    }
  });

  return Array.from(valuesSet);
};

export const getAllValuesForGivenKey = (arr: Record<string, any>[], key: string) => {
  let valuesSet: unknown[] = [];

  arr.forEach((item) => {
    if (item[key] !== undefined) {
      valuesSet = [...valuesSet, item[key]];
    }
  });

  return valuesSet;
};

export const sortCollections = (arr: CollectionsType, sortType: string) => {
  switch (sortType) {
    case "price_low_to_high":
      return arr.sort((a, b) => a.listingPrice - b.listingPrice);
    case "price_high_to_low":
      return arr.sort((a, b) => b.listingPrice - a.listingPrice);
    case "name_ascending":
      return arr.sort((a, b) => a.name.localeCompare(b.name));
    case "discount_high_to_low":
      return arr.sort((a, b) => b.discount - a.discount);
    default:
      return arr;
  }
};

export const filterCollections = (products: CollectionsType, filterBy: Record<FilterTypes, string[]>) => {
  const filteredProducts = products.filter((product) => {
    const combinedFilterBy = [...filterBy.supplierName, ...filterBy.sareeFabric];
    if (!combinedFilterBy.length) {
      return true;
    }

    if (combinedFilterBy.includes(product.supplierName) || combinedFilterBy.includes(product.sareeFabric)) {
      return true;
    }

    return false;
  });

  return filteredProducts;
};
