import React, { useEffect, useState } from "react";
import Display from "../display/Display";
import Navbar from "../navbar/Navbar";
import SideBar from "../sidebar/SideBar";
import { MainContent } from "./LayoutStyles";

const Layout = () => {
  const [hideMobileMenu, setHideMobileMenu] = useState(true);
  const [hideSideMenu, setHideSideMenu] = useState(true);

  const ToggleHamburger = () => {
    setHideMobileMenu(!hideMobileMenu);
  };

  useEffect(() => {
    if (window.innerWidth > 950) {
      setHideMobileMenu(false);
    }
  }, []);

  const ToggleSideButton = () => {
    setHideSideMenu(!hideSideMenu);
  };
  // useEffect(() => {
  //   if (window.innerWidth > 950) {
  //     setHideSideMenu(false);
  //   }
  // }, []);
  return (
    <main>
      <Navbar
        ToggleHamburger={ToggleHamburger}
        ToggleSideButton={ToggleSideButton}
        hideMobileMenu={hideMobileMenu}
        hideSideMenu={hideSideMenu}
      />

      <MainContent>
        <SideBar
        ToggleSideButton={ToggleSideButton}
        hideSideMenu={hideSideMenu}
        />

        <Display />
      </MainContent>
    </main>
  );
};

export default Layout;
