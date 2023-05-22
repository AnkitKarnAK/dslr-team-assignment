import PriceWithDiscount from "components/PriceWithDiscount";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";
import "./ProductCard.scss";

type ProductCardProps = {
  imgSrc: string;
  name: string;
  description: string;
  listingPrice: number;
  mrp: number;
  discount: number;
  clickHandler?: () => void;
};

const ProductCard = ({ imgSrc, name, description, listingPrice, mrp, discount, clickHandler }: ProductCardProps) => {
  return (
    <>
      <div className="card-container" onClick={clickHandler}>
        <div className="card-image">
          <img src={imgSrc} />
        </div>
        <div className="card-body">
          <div className="card-title">{name}</div>
          <div className="card-subtitle">{description}</div>
          <PriceWithDiscount listingPrice={listingPrice} mrp={mrp} discount={discount} />
          <div className="card-icon">
            <FavoriteBorderIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
