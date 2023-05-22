import Navbar from "components/Navbar";
import ProductCard from "components/ProductCard";
import { collections } from "data/collection";
import React from "react";
import "./Collections.scss";
import SwapVertOutlinedIcon from "@mui/icons-material/SwapVertOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

const Collections = () => {
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
        <div className="sort-filter-button">
          <SwapVertOutlinedIcon /> Sort
        </div>
        <div className="vertical-divider"></div>
        <div className="sort-filter-button">
          <TuneOutlinedIcon /> Filter
        </div>
      </div>
    </>
  );
};

export default Collections;
