import styled from "styled-components";

export const SideMenu = styled.aside`
  display: block;
  height: 100%;
  background: #fff;

  @media (max-width: 950px) {
    width: 100%;
  }
`;
export const Menu = styled.div`
  position: relative;
  margin: 10px;
  height: 55vh;
  text-align: left;
  padding: 0px;

  @media (max-width: 950px) {
    position: absolute;
    top: 50px;
    background-color: #e7e9eb;
    left: -30px;
    border: 2px solid #e7e9eb;
    width: 90%;
    height: 100%;
    z-index: 1;
    overflow-y: scroll;
    overflow-x: hidden;
  }
`;
export const ButtonCont = styled.div`
  margin: 15px 30px 15px 0px;
  display: flex;
  justify-content: center;

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

  @media (max-width: 950px) {
    button{
      width: 80%;
      justify-content: center;
      font-size: 18px;
      padding: 15px;
    }
  }
`;

export const InnerMenuWrapper = styled.div`
    // border: 2px solid black;
    margin: 20px;

    @media (max-width: 950px) {
      width: 90%;
    }
`;

export const InnerMenu = styled.div`
    // border: 2px solid black;
  width: 100%;
  max-width: 172px;
  margin: auto;

  h3 {
    font-family: "Segoe UI";
    font-size: 11px;
    color: #647787;
  }
  @media (max-width: 950px) {
    margin: 10px;
    // width: 100%;

    h3{
      font-size: 20px;
    }
  }
`;

export const MenuItem = styled.div`
  display: flex;

  img {
    margin-right: 15px;
  }

  @media (max-width: 950px) {
    // border: 2px solid red;
    width: 200%;
    margin-top: -15px;

    img{
      width: 35px;
    }
  }
`;

export const SideFooter = styled.div`
    // border: 2px solid black;
  width: 100%;
  max-width: 175px;
  margin: 15px auto;

  h3 {
    font-family: "Segoe UI";
    font-size: 11px;
    line-height: 15px;
    color: #647787;
  }

  @media (max-width: 950px) {
    margin: 30px;

    h3{
      font-size: 20px;
    }
  }
`;
