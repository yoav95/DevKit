import React from "react";
import DevGrid from "../components/DevGrid/DevGrid";
import DevContainer from "../components/DevContainer/DevContainer";
import DevBlock from "../components/DevBlock/DevBlock";
import { rowConfig } from "../utiles/DevConfig";
const Home = () => {
  return (
    <DevContainer max="1600px">
      <DevGrid rowsConfig={rowConfig} gap="5px">
        <DevBlock
          columns={[1, 4]}
          rows={[1, 2]}
          exist={{
            desktop: { show: true, rows: [1, 2], columns: [1, 5] },
            tablet: { show: true, rows: [1, 2], columns: [1, 13] },
            mobile: { show: true, rows: [1, 3], columns: [1, 13] },
          }}
        >
          <div className="div2"></div>
        </DevBlock>
        <DevBlock
          columns={[1, 4]}
          rows={[1, 2]}
          exist={{
            desktop: { show: true, rows: [1, 3], columns: [5, 8] },
            tablet: { show: true, rows: [2, 4], columns: [1, 8] },
            mobile: { show: true, rows: [3, 5], columns: [1, 13] },
          }}
        >
          <div className="div2"></div>
        </DevBlock>
        <DevBlock
          columns={[1, 4]}
          rows={[1, 2]}
          exist={{
            desktop: { show: true, rows: [1, 3], columns: [8, 13] },
            tablet: { show: true, rows: [2, 4], columns: [8, 13] },
            mobile: { show: false, rows: [3, 5], columns: [1, 13] },
          }}
        >
          <div className="div2"></div>
        </DevBlock>
      </DevGrid>
    </DevContainer>
  );
};

export default Home;
