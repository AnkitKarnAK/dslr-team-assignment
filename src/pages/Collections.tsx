import Navbar from "components/Navbar";
import ProductCard from "components/ProductCard";
import { collections } from "data/collection";
import React from "react";
import "../App.scss";

const Collections = () => {
  return (
    <>
      <Navbar title="Sarees" subTitle={`${collections.length} Items`} />
      <div className="collections">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
};

export default Collections;
