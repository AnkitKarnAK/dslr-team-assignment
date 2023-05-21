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
    </>
  );
};

export default Collections;
