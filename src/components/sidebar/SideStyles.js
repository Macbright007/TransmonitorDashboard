import styled from "styled-components";

export const SideMenu = styled.aside`
  border: 2px solid black;
  //   border: none;
  height: 100%;
  background: #fff;
`;
export const Menu = styled.div`
  //   border: 2px solid blue;
  margin: 10px;
  height: 55vh;
  text-align: left;
  padding: 0px;
`;
export const ButtonCont = styled.div`
  margin: 15px;

  button {
    background: #27ae60;
    border: none;
    border-radius: 30px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: flex-end;
    text-align: center;
    letter-spacing: 0.2px;
    color: #fff;
    padding: 10px 15px;
  }
`;

export const InnerMenuWrapper = styled.div`
  //   border: 2px solid black;
  margin: 20px;
`;

export const InnerMenu = styled.div`
  //   border: 2px solid black;
  width: 100%;
  max-width: 172px;
  margin: auto;

  h3 {
    font-family: "Segoe UI";
    font-size: 11px;
    // line-height: 15px;
    color: #647787;
  }
`;

export const MenuItem = styled.div`
  display: flex;

  img {
    margin-right: 15px;
  }
`;

export const SideFooter = styled.div`
  //   border: 2px solid black;
  width: 100%;
  max-width: 175px;
  margin: 15px auto;

  h3 {
    font-family: "Segoe UI";
    font-size: 11px;
    line-height: 15px;
    color: #647787;
  }
`;
