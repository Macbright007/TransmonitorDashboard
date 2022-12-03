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
import { BsArrowLeftRight } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FiBell } from "react-icons/fi";

const Navbar = ({ToggleHamburger, ToggleSideButton, hideMobileMenu, hideSideMenu}) => {
  return (
    <Header>
      <Nav>
        {hideSideMenu ? (
          <BsArrowLeftRight
            className="back__arrow"
            onClick={ToggleSideButton}
          />
        ) : (
          <BsArrowLeftRight
            className="back__arrow"
            onClick={ToggleSideButton}
          />
        )}
        <LeftNav>
          <h1>TransMonitor</h1>
        </LeftNav>

        {hideMobileMenu ? (
          <label for="toggle" onClick={ToggleHamburger}>
            &#9776;
          </label>
        ) : (
          <label for="toggle" onClick={ToggleHamburger}>
            &#9747;
          </label>
        )}
        <input type="checkbox" id="toggle" />

        {hideMobileMenu ? null : (
          <RightNav>
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
            <a>Support</a>
            <a>FAQ</a>

            <Notification>
              <FiBell className="notice" />
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
        )}
      </Nav>
    </Header>
  );
};

export default Navbar;
