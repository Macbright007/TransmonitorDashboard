import React from "react";
import Display from "../display/Display";
import Navbar from "../navbar/Navbar";
import SideBar from "../sidebar/SideBar";
import { MainContent } from "./LayoutStyles";

const Layout = () => {
  return (
    <main>
      <Navbar />

      <MainContent>
        <SideBar />

        <Display />
      </MainContent>
    </main>
  );
};

export default Layout;
