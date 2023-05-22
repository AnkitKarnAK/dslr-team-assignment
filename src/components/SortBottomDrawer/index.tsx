import { Drawer } from "@mui/material";
import { sortByList } from "data/sortByList";
import React from "react";
import "./SortBottomDrawer.scss";

type SortBottomDrawerProps = {
  open: boolean;
  closeDrawer: () => void;
};

const SortBottomDrawer = ({ open, closeDrawer }: SortBottomDrawerProps) => {
  return (
    <Drawer anchor="bottom" open={open} onClose={closeDrawer}>
      <div className="sortby-title">Sort By</div>
      {sortByList.map((item) => (
        <div key={item.id} className="sortby-item">
          <span>{item.icon}</span>
          {item.name}
        </div>
      ))}
    </Drawer>
  );
};

export default SortBottomDrawer;
