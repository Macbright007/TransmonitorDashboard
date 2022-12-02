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
            <span
              style={{ color: "#1875F0", fontSize: "14px", marginTop: "13px" }}
            >
              20
              </span>
              <MdKeyboardArrowDown
                style={{ marginTop: "1rem", color: "#1875F0" }}
              />
            
            <p>out if 500 Payments</p>
          </LeftInfo>

          <MiddleInfo>
            <input type="text" placeholder="Search payments" />
            <CiSearch
              style={{
                color: "#0E1D25",
                fontSize: "20px",
                position: "absolute",
                top: "12px",
                left: "0px",
              }}
            />
          </MiddleInfo>

          <RightInfo>
            <p>show</p>

            <InnerRightInfo>
              <p>All </p>
              <MdKeyboardArrowDown
                style={{ marginTop: "1rem", color: "#1875F0" }}
              />
            </InnerRightInfo>
          </RightInfo>
        </TableTop>
      </TableWrapper>

      <TableDetail />
    </TableContainer>
  );
};

export default Table;
