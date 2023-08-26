import "./App.css";
import DevContainer from "./components/DevContainer/DevContainer";
import DevGrid from "./components/DevGrid/DevGrid";
import DevBlock from "./components/DevBlock/DevBlock";
import { rowConfig } from "./utiles/DevConfig";
import { RouterProvider } from "react-router-dom";
import router from "./utiles/Routes";
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
