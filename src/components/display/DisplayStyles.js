import styled from "styled-components";

export const DisplayContainer = styled.div`
    // display: none;
    background: #e5e5e5;
    height: calc(100vh - 60px);
    overflow: scroll;

    ::-webkit-scrollbar {
        width: 5px;
        background-color: #27AE60; !important;
      }
      ::-webkit-scrollbar-thumb {
        background-color: rgb(249, 241, 249) !important;
      }

`;
