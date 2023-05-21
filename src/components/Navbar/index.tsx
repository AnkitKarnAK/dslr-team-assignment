import React from "react";
import "./Navbar.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

type NavbarProps = {
  title: string;
  subTitle?: string;
};

const Navbar = ({ title, subTitle }: NavbarProps) => {
  return (
    <div className="nav">
      <div className="nav-left">
        <ArrowBackIcon />
        <div className="nav-left-info">
          <div className="nav-title">{title}</div>
          <div className="nav-subtitle">{subTitle}</div>
        </div>
      </div>
      <div className="nav-right">
        <SearchIcon />
        <FavoriteBorderIcon />
        <ShoppingBagOutlinedIcon />
      </div>
    </div>
  );
};

export default Navbar;
