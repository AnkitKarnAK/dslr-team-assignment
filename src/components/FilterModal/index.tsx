import React, { useState } from "react";
import "./FilterModal.scss";
import { Dialog, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type FilterTypes = "supplierName" | "sareeFabric";

type FilterModalProps = {
  open: boolean;
  closeDialog: () => void;
  filterData: Record<
    FilterTypes,
    {
      type: string;
      name: string;
      values: string[];
    }
  >;
};

const FilterModal = ({ open, closeDialog, filterData }: FilterModalProps) => {
  const [selectedFilterType, setSelectedFilterType] = useState<FilterTypes>("supplierName");
  return (
    <div>
      <Dialog fullScreen open={open} onClose={closeDialog} TransitionComponent={Transition}>
        <div className="filter-title">
          <span>FILTERS</span>
          <span className="color-primary">CLEAR ALL</span>
        </div>
        <div className="filters">
          <div className="filter-types">
            {Object.values(filterData).map((filterObj) => (
              <div
                key={filterObj.type}
                className={filterObj.type === selectedFilterType ? "filter-type selected-filter-type" : "filter-type"}
                onClick={() => setSelectedFilterType(filterObj.type as FilterTypes)}
              >
                {filterObj.name}
              </div>
            ))}
          </div>
          <div className="filter-values">
            {filterData[selectedFilterType].values.map((filterValue) => (
              <div className="filter-value" key={filterValue}>
                {filterValue}
              </div>
            ))}
          </div>
        </div>

        <div className="filter-buttons">
          <div className="filter-button filter-close" onClick={closeDialog}>
            CLOSE
          </div>
          <div className="vertical-divider"></div>
          <div className="filter-button filter-apply">APPLY</div>
        </div>
      </Dialog>
    </div>
  );
};

export default FilterModal;
