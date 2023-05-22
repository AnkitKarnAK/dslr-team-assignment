import Navbar from "components/Navbar";
import ProductCard from "components/ProductCard";
import { collections } from "data/collection";
import React, { useEffect, useState } from "react";
import "./Collections.scss";
import SwapVertOutlinedIcon from "@mui/icons-material/SwapVertOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import SortBottomDrawer from "components/SortBottomDrawer";
import FilterModal from "components/FilterModal";
import { filterCollections, sortCollections } from "utils/utils";
import { FilterTypes } from "types/index.type";

const Collections = () => {
  const [sortBy, setSortBy] = useState({
    isShown: false,
    value: "",
  });

  const [filterBy, setFilterBy] = useState({
    isShown: false,
    values: {
      supplierName: [] as string[],
      sareeFabric: [] as string[],
    },
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

  const updateFilterBy = (newValues: Record<FilterTypes, string[]>) => {
    setFilterBy({
      isShown: false,
      values: newValues,
    });
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [sortBy.value]);

  const sortedData = sortCollections(collections, sortBy.value);
  const filteredData = filterCollections(sortedData, filterBy.values);

  return (
    <>
      <Navbar title="Sarees" subTitle={`${filteredData.length} Items`} />
      <div className="collections">
        {filteredData.map((product) => (
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
      <FilterModal open={filterBy.isShown} closeDialog={toggleFilterByDialog} filteredBy={filterBy.values} updateFilteredBy={updateFilterBy} />
    </>
  );
};

export default Collections;
