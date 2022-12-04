import styled from "styled-components";

export const GraphWrapper = styled.section`
  //   border: 2px solid black;
`;
export const GraphStats = styled.div`
    // border: 2px solid green;
  width: 100%;
  max-width: 1250px;
  margin: 25px auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`;
export const StatBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 75px;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid #eef8fd;
  border-radius: 2px;

  img {
    margin: 3px 0px;
    width: 28%;
  }

  @media (max-width: 950px) {
    // border: 2px solid blue;
    height: 150px;
    width: 100%;
    max-width: 350px;
    margin: auto;

    img {
      width: 40%;
      margin-right: 15px;
    }
  }
`;
export const Content = styled.div`
  P {
    font-family: "Segoe UI";
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: flex-end;
    color: #787c90;
  }

  h1 {
    font-family: "Segoe UI";
    font-size: 18px;
    line-height: 24px;
    display: flex;
    align-items: flex-end;
    color: #262626;
    margin-top: -10px;
  }

  @media (max-width: 950px) {
    margin-top: 30px;

    p,
    h1 {
      font-size: 18px;
      justify-content: center;
    }
  }
`;

// style for second graph

export const GraphContainer = styled.div`
  // display: none;
  width: 100%;
  max-width: 1250px;
  margin: 25px auto;
  border-radius: 2px;
  display: flex;

  @media (max-width: 950px) {
    // border: 2px solid blue;
    width: 95%;
    display: flex;
    flex-direction: column;
  }
`;

export const LeftContainerSide = styled.div`
  // display: none;
  position: relative;
  box-sizing: border-box;
  width: 62%;
  background: #fff;

  img {
    width: 100%;
    margin-top: 5rem;
    position: absolute;
    left: 0px;
    bottom: 0px;
  }

  @media (max-width: 950px) {
    width: 100%;
    overflow-x: scroll;
  }
`;
export const TopSide = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    font-family: "Segoe UI";
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: flex-end;
    color: #4f4f4f;
    margin-left: 30px;
  }

  @media (max-width: 950px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const InnerTopSide = styled.div`
  width: 40%;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  padding: 15px;

  .date {
    border: 1px solid #dde0e3;
    border-radius: 4.25px;
    font-family: "Segoe UI";
    font-size: 12px;
    line-height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    color: #7f8fa4;
  }

  .btn__btn button {
    background: linear-gradient(0deg, #f2f4f7 0%, #ffffff 100%);
    border: 1px solid #ced0da;
    border-radius: 4px;
    margin: 5px 7px;
    color: #cccfd4;
  }

  @media (max-width: 950px) {
    // border:2px solid blue;
    width: 100%;

    .date {
      font-size: 16px;
    }
    .btn__btn button {
      margin: 7px 9px;
      padding: 3px 10px;
    }
  }
`;

export const BottomSide = styled.div`
  display: flex;
  justify-content: space-around;

  .box {
    mix-blend-mode: normal;
    border: 1px solid #cfe8fb;
    padding: 0px 20px 20px;
    height: 250px;
    border-top: 0;
    border-left: 0;
    border-bottom: 0;
  }

  h3 {
    font-family: "Segoe UI";
    font-size: 14px;
    line-height: 19px;
    display: flex;
    align-items: left;
    color: #000;
  }

  // @media (max-width: 950px) {
  //   border: 2px solid blue;
  //   flex-direction: column;
  // }
`;

export const RightContainerSide = styled.div`
  // display: none;
  width: 38%;
  text-align: left;
  background: #fff;

  @media (max-width: 950px) {
    // border: 2px solid blue;
    width: 100%;
  }
`;

export const InnerRightSide = styled.div`
  border: 2px solid #e5e5e5;
  padding: 10px;

  h3 {
    font-family: "Segoe UI";
    font-size: 14px;
    line-height: 16px;
    color: #262626;
  }

  .container {
    background-color: #fdc203;
    width: 90%;
    border-radius: 3px;
    height: 4px;
  }

  .barCompleted {
    border-radius: 3px;
    background: #27ae60;
    width: 80%;
    height: 4px;
  }

  p {
    font-family: "Segoe UI";
    font-size: 14px;
    line-height: 16px;
    color: #262626;
  }

  @media (max-width: 950px) {
    padding: 20px;

    h3{
      font-size: 20px;
    }
    p{
      font-size: 18px;
    }

    .container,.barCompleted {
      height: 8px;
    }
  }
`;
