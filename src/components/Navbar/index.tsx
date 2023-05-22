import React from "react";
import "./Navbar.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link } from "react-router-dom";

type NavbarProps = {
  title?: string;
  subTitle?: string;
};

const Navbar = ({ title, subTitle }: NavbarProps) => {
  return (
    <div className="nav">
      <Link to="/" className="nav-left">
        <ArrowBackIcon />
        <div className="nav-left-info">
          <div className="nav-title">{title}</div>
          <div className="nav-subtitle">{subTitle}</div>
        </div>
      </Link>
      <div className="nav-right">
        <SearchIcon />
        <FavoriteBorderIcon />
        <ShoppingBagOutlinedIcon />
      </div>
    </div>
  );
};

export default Navbar;
