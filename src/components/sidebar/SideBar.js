import React from "react";
import {
  ButtonCont,
  InnerMenu,
  InnerMenuWrapper,
  Menu,
  MenuItem,
  SideFooter,
  SideMenu,
} from "./SideStyles";
import speed from "../../images/Vector.svg";
import wallet from "../../images/wallet.svg";
import walletOne from "../../images/walletOne.svg";
import walletTwo from "../../images/walletTwo.svg";
import fiber from "../../images/fiber.svg";
import orders from "../../images/orders.svg";
import orderOne from "../../images/orderOne.svg";
import orderTwo from "../../images/orderTwo.svg";
import profile from "../../images/profile.svg";

const SideBar = () => {
  return (
    <SideMenu>
      <Menu>
        <ButtonCont>
          <button>GENERATE INVOICE</button>
        </ButtonCont>

        <InnerMenuWrapper>
          <InnerMenu>
            <h3>Main</h3>
            <MenuItem>
              <img src={speed} alt="speed" />
              <h3>Overview</h3>
            </MenuItem>
          </InnerMenu>
        </InnerMenuWrapper>

        <InnerMenuWrapper>
          <InnerMenu>
            <h3>Payments</h3>
            <MenuItem>
              <img src={wallet} alt="wallet" />
              <h3>All Payments</h3>
            </MenuItem>
            <MenuItem>
              <img src={walletOne} alt="wallet" />
              <h3>Reconcilled Payments</h3>
            </MenuItem>
            <MenuItem>
              <img src={walletTwo} alt="wallet" />
              <h3>Un - Reconcilled Payments</h3>
            </MenuItem>
            <MenuItem>
              <img src={fiber} alt="fiber" />
              <h3>Manual Settlement</h3>
            </MenuItem>
          </InnerMenu>
        </InnerMenuWrapper>

        <InnerMenuWrapper>
          <InnerMenu>
            <h3>Orders</h3>
            <MenuItem>
              <img src={orders} alt="orders" />
              <h3>All Orders</h3>
            </MenuItem>
            <MenuItem>
              <img src={orderOne} alt="orderOne" />
              <h3>Pending Orders</h3>
            </MenuItem>
            <MenuItem>
              <img src={orderTwo} alt="orderTwo" />
              <h3>Reconcilled Payments</h3>
            </MenuItem>
          </InnerMenu>
        </InnerMenuWrapper>

        <SideFooter>
          <MenuItem>
            <img src={profile} alt="profile" />
            <h3>Merchant Profile</h3>
          </MenuItem>
        </SideFooter>
      </Menu>
    </SideMenu>
  );
};

export default SideBar;
