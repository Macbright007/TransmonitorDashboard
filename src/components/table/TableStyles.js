import styled from "styled-components";

export const TableContainer = styled.div`
  // border: 2px solid red;
  // display: none;
`;
export const TableWrapper = styled.div`
  // border: 2px solid blue;
  width: 100%;
  max-width: 1250px;
  margin: auto;
  padding: 0px;

  p {
    font-family: "Segoe UI";
    font-size: 26px;
    display: flex;
    align-items: flex-end;
    color: #262626;
  }

  @media (max-width: 950px) {
    width: 95%;
    padding: 0px 20px;

    p {
      font-weight: 600;
    }
  }
`;

export const TableTop = styled.div`
    // border: 2px solid black;
    display flex;
    justify-content: space-between;

    @media (max-width: 950px) {
      flex-direction: column;
    }
`;
export const LeftInfo = styled.div`
  // border: 2px solid green;
  width: 23%;
  display: flex;
  justify-content: space-between;

  p {
    font-family: "Segoe UI";
    font-size: 13px;
    line-height: 17px;
    display: flex;
    align-items: flex-end;
    color: #262626;
  }

  .spp {
    color: #1875f0;
    font-size: 14px;
    margin-top: 13px;
  }

  .dd__arrow {
    margin-top: 1rem;
    color: #1875f0;
  }

  @media (max-width: 950px) {
    width: 100%;

    p {
      font-size: 18px;
    }

    .spp {
      font-size: 18px;
      margin-top: 15px;
      margin-left: 5px;
    }

    .dd__arrow {
      font-size: 1.5rem;
      margin-right: 7px;
    }
  }
`;

export const MiddleInfo = styled.div`
  // border: 2px solid black;
  width: 30%;
  margin-right: 5rem;
  display: flex;
  position: relative;

  input[type="text"] {
    width: 100%;
    padding: 3px 20px 0px 30px;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    font-size: 12px;
    background: transparent;
  }

  .search{
    color: #0E1D25;
    fontSize: 20px;
    position: absolute;
    top: 12px;
    left: 0px;
  }

  @media (max-width: 950px) {
    width: 100%;
    margin-top: 20px;

    input[type="text"]{
      padding: 10px 30px;
      font-size: 15px;
      width: 90%;
      margin-left: 20px;
    }

    .search{
      left: 20px;
      font-size: 25px;
      top: 5px;
    }
  }
`;
export const RightInfo = styled.div`
  // border: 2px solid black;
  display: flex;
  justify-content: space-between;
  width: 20%;
  margin-right: 7rem;

  p {
    font-family: "Segoe UI";
    font-size: 13px;
    line-height: 17px;
    display: flex;
    align-items: flex-end;
    color: #000;
  }

  @media (max-width: 950px) {
    width: 100%;
    margin-top: 3rem;

    p{
      font-size: 20px;
    }
  }
`;

export const InnerRightInfo = styled.div`
  border: 1px solid #ced0da;
  border-radius: 2px;
  background: #ced0da;
  width: 70%;
  display: flex;
  justify-content: space-around;

  p {
    font-family: "Segoe UI";
    font-size: 13px;
    line-height: 13px;
    display: flex;
    align-items: flex-end;
    color: #414042;
  }

  .dd__arrow {
    margin-top: 1rem;
    color: #1875f0;
  }

  @media (max-width: 950px){
    p{
      font-size: 20px;
    }

    .dd__arrow {
      font-size: 1.5rem;
      margin-right: 7px;
    }
  }
`;

// styling for table details

export const Table = styled.table`
  border: 2px solid red;
  border-collapse: collapse;
  width: 100%;
  max-width: 1250px;
  margin: 25px auto;
  // display: none;

  // @media (max-width: 950px) {
    // width: 200px;
    // overflow-x: auto;
    // overflow-y: hidden;
    // -ms-overflow-style: -ms-autohiding-scrollbar;
  // }

  @media (max-width: 950px) {
    width: 100%;
    max-width: 200px;
    
    overflow-x: scroll;
  }
`;
export const TableRow = styled.tr`
  // border: 2px solid blue;
  width: 100%;
  text-align: left;

  th {
    font-family: "Segoe UI";
    font-size: 14px;
    line-height: 19px;
    color: #7f8fa4;
    font-weight: 500;
  }

  // @media (max-width: 950px) {
  //   // width: 200px;
  //   // overflow-x: auto;
  //   // overflow-y: hidden;
  //   // -ms-overflow-style: -ms-autohiding-scrollbar;
  //   border: 2px solid red;
  // }
`;

export const TableBodyRow = styled.tr`
  // border: 2px solid blue;
  border-bottom: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  background-color: #fff;

  .circle {
    color: #fff;
    background: #7f8fa4;
    width: 35px;
    height: 30px;
    border-radius: 100%;
    font-family: "Segoe UI";
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.5rem;
  }

  td > p {
    font-family: "Segoe UI";
    font-size: 14px;
    line-height: 19px;
    color: #7f8fa4;
  }

  .dt {
    border: 1px solid #cccfd4;
    border-radius: 30px;
    font-family: "Segoe UI";
    font-size: 12px;
    display: flex;
    align-items: flex-end;
    color: #27ae60;
    width: 120px;
    padding: 3px 7px 5px;
  }

  // @media (max-width: 950px) {
  //   width: 100%;
  //   max-wdth: 300px;

  //   overflow-x: auto;
  //   overflow-y: hidden;
  //   -ms-overflow-style: -ms-autohiding-scrollbar;
  //   border: 2px solid blue;
  // }
`;

export const TableBottom = styled.div`
  // border: 2px solid black;
  margin-top: 15px;
  width: 200%;
  display: flex;
  justify-content: space-between;

  p {
    font-family: "Segoe UI";
    font-size: 13px;
    line-height: 17px;
    color: #000;
    display: flex;
    align-items: center;
    margin: 0px;
  }

  .pagination {
    display: flex;

    div {
      border: 1px solid #ced0da;
      font-family: "Segoe UI";
      font-size: 13px;
      color: #000;
      display: flex;
      align-items: center;
      padding: 6px;
    }
  }
`;
