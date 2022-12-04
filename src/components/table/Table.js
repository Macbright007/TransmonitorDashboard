import React from "react";
import { CiSearch } from "react-icons/ci";
import TableDetail from "./TableDetail";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  InnerRightInfo,
  LeftInfo,
  MiddleInfo,
  RightInfo,
  TableContainer,
  TableTop,
  TableWrapper,
} from "./TableStyles";

const Table = () => {
  return (
    <TableContainer>
      <TableWrapper>
        <p>Payments</p>

        <TableTop>
          <LeftInfo>
            <p>Showing</p>
            <span className="spp">20</span>
            <MdKeyboardArrowDown className="dd__arrow" />

            <p>out if 500 Payments</p>
          </LeftInfo>

          <MiddleInfo>
            <input type="text" placeholder="Search payments" />
            <CiSearch className="search" />
          </MiddleInfo>

          <RightInfo>
            <p>show</p>

            <InnerRightInfo>
              <p>All </p>
              <MdKeyboardArrowDown className="dd__arrow" />
            </InnerRightInfo>
          </RightInfo>
        </TableTop>
      </TableWrapper>

      <TableDetail />
    </TableContainer>
  );
};

export default Table;
