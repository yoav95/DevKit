import React from "react";
// import styles from "./DevGrid.module.css";
import styled from "styled-components";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, auto);
  grid-template-rows: ${(props) => props.desktopRows};
  row-gap: ${(props) => props.gap};
  column-gap: ${(props) => props.gap};
  margin: 5px 0;
  @media (min-width: 768px) and (max-width: 1199px) {
    grid-template-rows: ${(props) => props.tabletRows};
  }
  @media (max-width: 768px) {
    grid-template-rows: ${(props) => props.mobileRows};
  }
`;

const DevGrid = ({ children, rowsConfig, gap }) => {
  return (
    <StyledGrid
      desktopRows={rowsConfig.desktop.sizes.join(" ")}
      mobileRows={rowsConfig.mobile.sizes.join(" ")}
      tabletRows={rowsConfig.tablet.sizes.join(" ")}
      gap={gap}
    >
      {children}
    </StyledGrid>
  );
};

export default DevGrid;
