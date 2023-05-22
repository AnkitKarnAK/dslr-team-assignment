import { Drawer } from "@mui/material";
import { sortByList } from "data/sortByList";
import React from "react";
import "./SortBottomDrawer.scss";

type SortBottomDrawerProps = {
  open: boolean;
  closeDrawer: () => void;
  sortedBy: string;
  updateSortedBy: (type: string) => void;
};

const SortBottomDrawer = ({ open, closeDrawer, sortedBy, updateSortedBy }: SortBottomDrawerProps) => {
  return (
    <Drawer anchor="bottom" open={open} onClose={closeDrawer}>
      <div className="sortby-title">Sort By</div>
      {sortByList.map((item) => (
        <div key={item.id} onClick={() => updateSortedBy(item.type)} className={item.type === sortedBy ? "sortby-item sortby-item-selected primary" : "sortby-item"}>
          <span>{item.icon}</span>
          <span>{item.name}</span>
        </div>
      ))}
    </Drawer>
  );
};

export default SortBottomDrawer;
