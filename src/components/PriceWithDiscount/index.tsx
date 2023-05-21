import React from "react";
import "./PriceWithDiscount.scss";

type PriceWithDiscountProps = {
  mrp: number;
  listingPrice: number;
  discount: number;
};

const PriceWithDiscount = ({ mrp, listingPrice, discount }: PriceWithDiscountProps) => {
  return (
    <div className="price-with-discount">
      <span className="listing-price">₹{listingPrice}</span>
      <span className="mrp">₹{mrp}</span>
      <span className="discount">{`(${discount}% OFF)`}</span>
    </div>
  );
};

export default PriceWithDiscount;
