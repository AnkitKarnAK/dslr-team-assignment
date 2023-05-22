import Navbar from "components/Navbar";
import ProductCard from "components/ProductCard";
import { collections } from "data/collection";
import React from "react";
import { useParams } from "react-router";
import "./Product.scss";

const Product = () => {
  const { productId } = useParams();
  const product = collections.find((product) => product.productId === Number(productId));
  if (!product) return null;

  return (
    <>
      <Navbar />
      <div className="product-card-container ">
        <ProductCard
          imgSrc={product.primaryImage.webpImages.lImage}
          name={product.name}
          description={product.description}
          listingPrice={product.listingPrice}
          mrp={product.mrp}
          discount={product.discount}
        />
      </div>
      <div className="product-buttons">
        <button className="product-btn-secondary">WISHLIST</button>
        <button className="product-btn-primary">ADD TO BAG</button>
      </div>
    </>
  );
};

export default Product;
