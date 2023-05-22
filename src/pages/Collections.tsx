import Navbar from "components/Navbar";
import ProductCard from "components/ProductCard";
import { collections } from "data/collection";
import React, { useState } from "react";
import "./Collections.scss";
import SwapVertOutlinedIcon from "@mui/icons-material/SwapVertOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import SortBottomDrawer from "components/SortBottomDrawer";

const Collections = () => {
  const [sortBy, setSortBy] = useState({
    isShown: true,
    value: "",
  });

  const toggleSortByDrawer = () => {
    setSortBy((prev) => ({ ...prev, isShown: !prev.isShown }));
  };

  return (
    <>
      <Navbar title="Sarees" subTitle={`${collections.length} Items`} />
      <div className="collections">
        {collections.map((product) => (
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
        <div className="sort-filter-button">
          <TuneOutlinedIcon /> Filter
        </div>
      </div>
      <SortBottomDrawer open={sortBy.isShown} closeDrawer={toggleSortByDrawer} />
    </>
  );
};

export default Collections;
