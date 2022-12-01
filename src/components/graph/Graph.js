import React from "react";
import {
    BottomSide,
  Content,
  GraphContainer,
  GraphStats,
  GraphWrapper,
  InnerTopSide,
  LeftContainerSide,
  StatBox,
  TopSide,
} from "./GraphStyles";
import graph from "../../images/graph.svg";
import gradient from "../../images/Gradient.svg";



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
                <button>8</button>
                <button>9</button>
              </div>
            </InnerTopSide>
          </TopSide>

          <BottomSide>
            <h3>Jan</h3>
            <h3>Feb</h3>
            <h3>Mar</h3>
            <h3>Apr</h3>
            <h3>May</h3>
            <h3>Jun</h3>
          </BottomSide>

          <img src={gradient} alt="stat" />
        </LeftContainerSide>

        <div>
          <div>
            <h3>Orders</h3>
            <p>
              Pending Orders: <span>20</span>
            </p>
            <p>
              Reconciled: <span>80</span>
            </p>
            <p>
              Total Orders: <span>100</span>
            </p>
          </div>
          <div>
            <h3>Payments</h3>
            <p>
              Un-reconciled Payments: <span>20</span>
            </p>
            <p>
              Reconciled Payments: <span>80</span>
            </p>
            <p>
              Total Payments: <span>100</span>
            </p>
          </div>
        </div>
      </GraphContainer>
    </GraphWrapper>
  );
};

export default Graph;
