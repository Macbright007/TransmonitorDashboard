import styled from "styled-components";

export const GraphWrapper = styled.section`
  //   border: 2px solid black;
`;
export const GraphStats = styled.div`
  //   border: 2px solid green;
  width: 100%;
  max-width: 1150px;
  margin: 25px auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
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
`;

// style for second graph

export const GraphContainer = styled.div`
  // border: 2px solid black;
  width: 100%;
  max-width: 1150px;
  margin: 25px auto;
  background: #fff;
  border: 1px solid #eef8fd;
  border-radius: 2px;
  display: flex;
`;

export const LeftContainerSide = styled.div`
  // border: 2px solid blue;
  width: 62%;

  img {
    width: 100%;
    margin-top: 5rem;
  }
`;
export const TopSide = styled.div`
  // border: 2px solid red;
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
`;

export const InnerTopSide = styled.div`
  // border: 2px solid blue;
  width: 40%;
  margin: 10px;
  display: flex;
  justify-content: space-between;

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
  }
`;

export const BottomSide = styled.div`
  // border: 2px solid black;
  display: flex;
  justify-content: space-around;

  h3 {
    font-family: "Segoe UI";
    font-size: 14px;
    line-height: 19px;
    display: flex;
    align-items: center;
    color: #000;
  }
`;
