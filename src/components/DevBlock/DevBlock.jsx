import React from "react";
import styled from "styled-components";
const StyledBlock = styled.div`
  grid-column: ${(props) => props.gridColumnProperty};
  grid-row: ${(props) => props.gridRowProperty};
  overflow: hidden;
`;
const DevBlock = ({ children, columns, rows }) => {
  const gridColumnProperty = `${columns[0]}/${columns[1]}`;
  const gridRowProperty = `${rows[0]}/${rows[1]}`;

  return (
    <StyledBlock
      gridRowProperty={gridRowProperty}
      gridColumnProperty={gridColumnProperty}
    >
      {children}
    </StyledBlock>
  );
};

export default DevBlock;
