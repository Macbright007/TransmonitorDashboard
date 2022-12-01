import React from "react";
import {
  BottomSide,
  Content,
  GraphContainer,
  GraphStats,
  GraphWrapper,
  InnerRightSide,
  InnerTopSide,
  LeftContainerSide,
  RightContainerSide,
  StatBox,
  TopSide,
} from "./GraphStyles";
import graph from "../../images/graph.svg";
import gradient from "../../images/Gradient.svg";
import ProgressBar from "@ramonak/react-progress-bar";

const Graph = () => {
  return (
    <GraphWrapper>
      <GraphStats>
        <StatBox>
          <Content>
            <p>Daily Transaction Volume</p>
            <h1>2,342</h1>
          </Content>

          <img src={graph} alt="graph" />
        </StatBox>
        <StatBox>
          <Content>
            <p>Daily Transaction Value</p>
            <h1>#4,000,000</h1>
          </Content>

          <img src={graph} alt="graph" />
        </StatBox>
        <StatBox>
          <Content>
            <p>Total Transaction Volume</p>
            <h1>452,000</h1>
          </Content>

          <img src={graph} alt="graph" />
        </StatBox>
        <StatBox>
          <Content>
            <p>Total Transaction Value</p>
            <h1>#4,000,000</h1>
          </Content>

          <img src={graph} alt="graph" />
        </StatBox>
      </GraphStats>

      <GraphContainer>
        <LeftContainerSide>
          <TopSide>
            <h2>Today: 5, Aug 2018</h2>
            <InnerTopSide>
              <div className="date">1 Jan - 1 Jun</div>

              <div className="btn__btn">
                <button>&lt;</button>
                <button>&gt;</button>
              </div>
            </InnerTopSide>
          </TopSide>

          <BottomSide>
            <div className="box">
              <h3>Jan</h3>
            </div>
            <div className="box">
              <h3>Feb</h3>
            </div>
            <div className="box">
              <h3>Mar</h3>
            </div>
            <div className="box">
              <h3>Apr</h3>
            </div>
            <div className="box">
              <h3>May</h3>
            </div>
            <div className="box">
              <h3>Jun</h3>
            </div>
          </BottomSide>

          <img src={gradient} alt="stat" />
        </LeftContainerSide>

        <RightContainerSide>
          <InnerRightSide>
            <h3>Orders</h3>

            <ProgressBar
              completed={80}
              barContainerClassName="container"
              completedClassName="barCompleted"
              isLabelVisible={false}
            />
            <p>
              Pending Orders:{" "}
              <span style={{ color: "#fdc203", fontWeight: "700" }}>20</span>
            </p>
            <p>
              Reconciled:{" "}
              <span style={{ color: "#27ae60", fontWeight: "700" }}>80</span>
            </p>
            <p>
              Total Orders:{" "}
              <span style={{ color: "#1860EC", fontWeight: "700" }}>100</span>
            </p>
          </InnerRightSide>
          <InnerRightSide>
            <h3>Payments</h3>
            <ProgressBar
              completed={80}
              barContainerClassName="container"
              completedClassName="barCompleted"
              isLabelVisible={false}
            />
            <p>
              Un-reconciled Payments:{" "}
              <span style={{ color: "#fdc203", fontWeight: "700" }}>20</span>
            </p>
            <p>
              Reconciled Payments:{" "}
              <span style={{ color: "#27ae60", fontWeight: "700" }}>80</span>
            </p>
            <p>
              Total Payments:{" "}
              <span style={{ color: "#1860EC", fontWeight: "700" }}>100</span>
            </p>
          </InnerRightSide>
        </RightContainerSide>
      </GraphContainer>
    </GraphWrapper>
  );
};

export default Graph;
