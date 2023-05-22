import React, { useState } from "react";
import "./FilterModal.scss";
import { Dialog, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import { DeepCopy, getAllValuesForGivenKey, getUniqueValuesForGivenKey } from "utils/utils";
import { collections } from "data/collection";
import { FilterTypes } from "types/index.type";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export type FilterData = Record<
  FilterTypes,
  {
    type: string;
    name: string;
    uniqueValues: string[];
    allValues: string[];
  }
>;

type FilterModalProps = {
  open: boolean;
  closeDialog: () => void;
  filteredBy: {
    supplierName: string[];
    sareeFabric: string[];
  };
  updateFilteredBy: (newValues: Record<FilterTypes, string[]>) => void;
};

const FilterModal = ({ open, closeDialog, filteredBy, updateFilteredBy }: FilterModalProps) => {
  const filterData: FilterData = {
    supplierName: {
      type: "supplierName",
      name: "Supplier",
      uniqueValues: getUniqueValuesForGivenKey(collections, "supplierName") as string[],
      allValues: getAllValuesForGivenKey(collections, "supplierName") as string[],
    },
    sareeFabric: {
      type: "sareeFabric",
      name: "Saree Fabric",
      uniqueValues: getUniqueValuesForGivenKey(collections, "sareeFabric") as string[],
      allValues: getAllValuesForGivenKey(collections, "sareeFabric") as string[],
    },
  };

  const [selectedFilterType, setSelectedFilterType] = useState<FilterTypes>("supplierName");
  const [selectedValues, setSelectedValues] = useState(DeepCopy(filteredBy));

  const addItemToArray = (arr: string[], item: string) => (arr.includes(item) ? arr.filter((el) => el !== item) : [...arr, item]);

  return (
    <div>
      <Dialog fullScreen open={open} onClose={closeDialog} TransitionComponent={Transition}>
        <div className="filter-title">
          <span>FILTERS</span>
          <span
            onClick={() => {
              setSelectedValues({
                supplierName: [],
                sareeFabric: [],
              });
              updateFilteredBy({
                supplierName: [],
                sareeFabric: [],
              });
            }}
            className="primary"
          >
            CLEAR ALL
          </span>
        </div>
        <div className="filters">
          <div className="filter-types">
            {Object.values(filterData).map((filterObj) => (
              <div
                key={filterObj.type}
                className={filterObj.type === selectedFilterType ? "filter-type selected-filter-type" : "filter-type"}
                onClick={() => setSelectedFilterType(filterObj.type as FilterTypes)}
              >
                <span>{filterObj.name}</span>

                <span className="filter-type-count">{selectedValues[filterObj.type as FilterTypes].length || ""}</span>
              </div>
            ))}
          </div>
          <div className="filter-values">
            {filterData[selectedFilterType].uniqueValues.map((filterValue) => {
              const isExistingFilterValue = selectedValues[selectedFilterType].includes(filterValue);

              return (
                <div
                  onClick={() => {
                    setSelectedValues({
                      ...selectedValues,
                      [selectedFilterType]: addItemToArray(selectedValues[selectedFilterType], filterValue),
                    });
                  }}
                  className={isExistingFilterValue ? "filter-value  filter-value-selected" : "filter-value"}
                  key={filterValue}
                >
                  <span className="filter-value-name">
                    <DoneOutlinedIcon fontSize={isExistingFilterValue ? "small" : "inherit"} htmlColor={isExistingFilterValue ? "#ff3e6c" : ""} />
                    {filterValue}
                  </span>
                  <span className="filter-value-count">{filterData[selectedFilterType].allValues.filter((v) => v === filterValue).length}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="filter-buttons">
          <div className="filter-button filter-close" onClick={closeDialog}>
            CLOSE
          </div>
          <div className="vertical-divider"></div>
          <div
            className="filter-button primary"
            onClick={() => {
              updateFilteredBy({ ...DeepCopy(selectedValues) });
            }}
          >
            APPLY
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default FilterModal;
