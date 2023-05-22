import Navbar from "components/Navbar";
import ProductCard from "components/ProductCard";
import { collections } from "data/collection";
import React, { useState } from "react";
import "./Collections.scss";
import SwapVertOutlinedIcon from "@mui/icons-material/SwapVertOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import SortBottomDrawer from "components/SortBottomDrawer";
import FilterModal from "components/FilterModal";
import { getAllValuesForGivenKey, sortArrayByType } from "utils/utils";

const Collections = () => {
  const [sortBy, setSortBy] = useState({
    isShown: false,
    value: "",
  });

  const [filterBy, setFilterBy] = useState({
    isShown: false,
    value: "",
  });

  const toggleSortByDrawer = () => {
    setSortBy((prev) => ({ ...prev, isShown: !prev.isShown }));
  };

  const updateSortedBy = (type: string) => {
    if (sortBy.value === type) {
      setSortBy({
        ...sortBy,
        value: "",
      });
    } else {
      setSortBy({
        isShown: false,
        value: type,
      });
    }
  };

  const toggleFilterByDialog = () => {
    setFilterBy((prev) => ({ ...prev, isShown: !prev.isShown }));
  };

  const filterData = {
    supplierName: {
      type: "supplierName",
      name: "Supplier",
      values: getAllValuesForGivenKey(collections, "supplierName") as string[],
    },
    sareeFabric: {
      type: "sareeFabric",
      name: "Saree Fabric",
      values: getAllValuesForGivenKey(collections, "sareeFabric") as string[],
    },
  };

  const sortedData = sortArrayByType(collections, sortBy.value);

  return (
    <>
      <Navbar title="Sarees" subTitle={`${collections.length} Items`} />
      <div className="collections">
        {sortedData.map((product) => (
          <ProductCard
            key={product.id}
            imgSrc={product.primaryImage.webpImages.lImage}
            name={product.name}
            description={product.description}
            listingPrice={product.listingPrice}
            mrp={product.mrp}
            discount={product.discount}
          />
        ))}
      </div>
      <div className="sort-filter-buttons">
        <div className="sort-filter-button" onClick={toggleSortByDrawer}>
          <SwapVertOutlinedIcon /> Sort
        </div>
        <div className="vertical-divider"></div>
        <div className="sort-filter-button" onClick={toggleFilterByDialog}>
          <TuneOutlinedIcon /> Filter
        </div>
      </div>
      <SortBottomDrawer open={sortBy.isShown} closeDrawer={toggleSortByDrawer} sortedBy={sortBy.value} updateSortedBy={updateSortedBy} />
      <FilterModal open={filterBy.isShown} closeDialog={toggleFilterByDialog} filterData={filterData} />
    </>
  );
};

export default Collections;
