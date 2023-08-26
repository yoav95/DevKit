import "./App.css";
import DevContainer from "./components/DevContainer/DevContainer";
import DevGrid from "./components/DevGrid/DevGrid";
import DevBlock from "./components/DevBlock/DevBlock";
import { rowConfig } from "./utiles/DevConfig";

function App() {
  return (
    <DevContainer max="1400px">
      <DevGrid rowsConfig={rowConfig} gap="5px">
        <DevBlock columns={[1, 13]} rows={[1, 1]}>
          <div class="div1">
            <h1>Hello World!</h1>
            <p>asdasdffffffffffffffffffa</p>
          </div>
        </DevBlock>
        <DevBlock columns={[1, 5]} rows={[2, 2]}>
          <div class="div1">
            <h1>Hello World!</h1>
          </div>
        </DevBlock>
        <DevBlock columns={[5, 13]} rows={[2, 2]}>
          <div class="div1">
            <h1>Hello World!</h1>
          </div>
        </DevBlock>
        <DevBlock columns={[1, 13]} rows={[3, 3]}>
          <div class="div1">
            <h1>Hello World!</h1>
          </div>
        </DevBlock>
        <DevBlock columns={[1, 7]} rows={[4, 4]}>
          <div class="div1">
            <h1>Hello World!</h1>
          </div>
        </DevBlock>
        <DevBlock columns={[7, 13]} rows={[4, 4]}>
          <div class="div1">
            <h1>Hello World!</h1>
          </div>
        </DevBlock>
        <DevBlock columns={[1, 13]} rows={[5, 5]}>
          <div className="div1">
            <h2>Wow</h2>
          </div>
        </DevBlock>
      </DevGrid>
    </DevContainer>
  );
}

export default App;
