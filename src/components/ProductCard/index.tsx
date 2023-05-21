import PriceWithDiscount from "components/PriceWithDiscount";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";
import "./ProductCard.scss";

const ProductCard = () => {
  return (
    <>
      <div className="card-container">
        <div className="card-image">
          <img src="https://d2mg89328eg065.cloudfront.net/optimized_media/300/l_1A3198H.webp" />
        </div>
        <div className="card-body">
          <div className="card-title">Mitera</div>
          <div className="card-subtitle">content text</div>
          <PriceWithDiscount listingPrice={791} mrp={3299} discount={76} />
          <div className="card-icon">
            <FavoriteBorderIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
