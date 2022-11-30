import styled from "styled-components";

export const Header = styled.header`
  background: #fff;
  box-shadow: 0px 4px 10px rgba(79, 79, 79, 0.07);
  height: 60px;
`;

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
  max-width: 1400px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

export const LeftNav = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;

  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    // line-height: 28px;
    text-align: right;
    color: #1875f0;
    margin: 15px 0px;
  }
`;

export const SearchBar = styled.div`
  display: flex;
//   border: 2px solid green;
  width: 50%;
  margin: 5px 0px;
  padding: 0px 10px;

  input[type="text"] {
    width: 100%;
    padding: 5px 4px;
    border: none;
    // border: 2px solid red;
    margin: 9px 0px;
    font-size: 16px;
  }
`;

export const RightNav = styled.div`
  display: flex;

  a {
    font-family: "Segoe UI";
    font-size: 14px;
    line-height: 19px;
    color: #647787;
    margin: 20px 10px;
  }
`;

export const Notification = styled.div`
  position: relative;

  span {
    border-radius: 100%;
    height: 17px;
    width: 17px;
    position: absolute;
    padding: 5px;
    right: 40%;
    top: 25%;
    bottom: 45%;
    background-color: #1860ec;
    font-family: "Segoe UI";
    font-size: 12px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #fcfdff;
  }
`;

export const InfoSide = styled.div`
  display: flex;

  img {
    height: 45px;
    width: 45px;
    border-radius: 100%;
    margin-top: 7px;
  }
`;

export const InnerInfo = styled.div`
  //   border: 2px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-right: 8px;

  //   h3:last-child {
  //     color: blue;
  //   }

  h3 {
    margin: 0;
    font-family: "Segoe UI";
    font-size: 10px;
    line-height: 13px;
    text-align: right;
    color: #647787;
  }
`;
