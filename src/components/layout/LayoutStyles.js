import styled from "styled-components";


export const MainContent = styled.section`
    // border: 2px solid blue;
    display: grid;
    grid-template-columns: 20% 1fr;
    height: calc(100vh - 60px);

    @media (max-width: 950px) {
        grid-template-columns: 0% 1fr;
    }
`