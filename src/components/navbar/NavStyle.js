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

  .back__arrow {
    font-size: 1.5rem;
    margin-top: 15px;
    display: none;
  }
  label {
    display: none;
    color: #00474b;
    margin-top: 5px;
    font-size: 1.5rem;
  }
  #toggle {
    display: none;
  }

  @media (max-width: 950px) {
    // border: 2px solid red;
    padding: 10px;

    label {
      display: block;
      cursor: pointer;
    }
    .back__arrow {
      display: block;
      cursor: pointer;
    }
  }
`;

export const LeftNav = styled.div`
  display: flex;
  justify-content: start;
  // border: 2px solid blue;

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

  @media (max-width: 950px) {
    h1{
      font-size: 30px;
      line-height: 28px;
      font-weight: 800;
    }
  }
`;

export const SearchBar = styled.div`
  display: flex;
  width: 50%;
  margin: 5px 0px;
  padding: 0px 10px;

  input[type="text"] {
    width: 100%;
    padding: 7px 4px;
    border: none;
    margin: 9px 0px;
    font-size: 16px;
  }

  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const RightNav = styled.div`
  // border: 2px solid red;
  margin-right: -5.8rem;
  display: flex;
  justify-content: space-between;
  width: 89.2%;

  a {
    font-family: "Segoe UI";
    font-size: 14px;
    line-height: 19px;
    color: #647787;
    margin: 20px 5px;
  }

  @media (max-width: 950px) {
    flex-direction: column;
    width: 95%;
    height: 75vh;
    padding: 20px;
    position: absolute;
    top: 0;
    right: -60px;
    margin: 70px;
    // background: rgba(255, 255, 255, 0.2);
    background-color: #e7e9eb;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 2px solid #0f0033;
    // z-index: 1;

    a:hover {
      background-color: #083570;
      color: #fff;
      cursor: pointer;
    }

    a {
      display: block;
      text-align: center;
      padding: 15px;
      font-size: 20px;
      background: #1875F0;
      color: white;
      margin-top: -5rem;
      // border-bottom: 2px solid white;
    }
  }
`;

export const Notification = styled.div`
  position: relative;

  .notice {
    font-size: 23px;
    margin: 20px 15px;
  }

  span {
    border-radius: 100%;
    height: 17px;
    width: 17px;
    position: absolute;
    padding: 5px;
    right: 25%;
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

  @media (max-width: 950px) {
    .notice {
      font-size: 40px;
      margin-top: -5rem;
    }

    span {
      height: 27px;
      width: 27px;
      font-size: 15px;
      justify-content: center;
      right: 43%;
      top: -50px;
    }
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

  @media (max-width: 950px) {
    justify-content: center;
    

    img{
      height: 70px;
      width: 70px;
      margin-top: -5rem;
    }
  }
`;

export const InnerInfo = styled.div`
  // border: 2px solid red;
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

  @media (max-width: 950px) {
    margin-top: -6rem;

    h3{
      font-size: 23px;
      margin-top: 10px;
    }
  }
`;
