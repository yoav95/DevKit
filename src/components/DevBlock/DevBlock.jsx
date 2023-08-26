import React from "react";
import styled from "styled-components";
const StyledBlock = styled.div`
  visibility: ${(props) => (props.exist.desktop.show ? "visible" : "hidden")};
  grid-column: ${(props) => props.desktopColumns};
  grid-row: ${(props) => props.desktopRows};
  overflow: hidden;
  @media (min-width: 768px) and (max-width: 1199px) {
    visibility: ${(props) => (props.exist.tablet ? "visible" : "hidden")};
    grid-column: ${(props) => props.tabletColumns};
    grid-row: ${(props) => props.tabletRows};
  }
  @media (max-width: 768px) {
    visibility: ${(props) => (props.exist.mobile ? "visible" : "hidden")};
    grid-column: ${(props) => props.mobileColumns};
    grid-row: ${(props) => props.mobileRows};
  }
`;
const DevBlock = ({ children, exist }) => {
  const desktopColumns = `${exist.desktop.columns[0]}/${exist.desktop.columns[1]}`;
  const desktopRows = `${exist.desktop.rows[0]}/${exist.desktop.rows[1]}`;

  const tabletColumns = `${exist.tablet.columns[0]}/${exist.tablet.columns[1]}`;
  const tabletRows = `${exist.tablet.rows[0]}/${exist.tablet.rows[1]}`;

  const mobileColumns = `${exist.mobile.columns[0]}/${exist.mobile.columns[1]}`;
  const mobileRows = `${exist.mobile.rows[0]}/${exist.mobile.rows[1]}`;

  return (
    <StyledBlock
      desktopRows={desktopRows}
      desktopColumns={desktopColumns}
      tabletColumns={tabletColumns}
      tabletRows={tabletRows}
      mobileColumns={mobileColumns}
      mobileRows={mobileRows}
      exist={exist}
    >
      {children}
    </StyledBlock>
  );
};

export default DevBlock;
