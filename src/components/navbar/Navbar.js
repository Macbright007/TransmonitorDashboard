import React from "react";
import {
  Header,
  InfoSide,
  InnerInfo,
  LeftNav,
  Nav,
  Notification,
  RightNav,
  SearchBar,
} from "./NavStyle";
import pic from "../../images/pic.svg";
import { FiBell } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <Header>
      <Nav>
        <LeftNav>
          <h1>TransMonitor</h1>
          <SearchBar>
            <CiSearch
              style={{
                color: "#0E1D25",
                fontSize: "30px",
                marginTop: "10px",
                marginRight: "20px",
              }}
            />
            <input type="text" placeholder="Search..." />
          </SearchBar>
        </LeftNav>

        <RightNav>
          <a>Support</a>
          <a>FAQ</a>

          <Notification>
            <FiBell style={{ fontSize: "23px", margin: "20px 50px" }} />
            <span>8</span>
          </Notification>

          <InfoSide>
            <InnerInfo>
              <h3>Hello</h3>
              <h3>Oluwaleke Ojo</h3>
            </InnerInfo>

            <img src={pic} alt="person" />
          </InfoSide>
        </RightNav>
      </Nav>
    </Header>
  );
};

export default Navbar;
