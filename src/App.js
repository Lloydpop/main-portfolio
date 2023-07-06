import { useEffect } from "react";
import "./App.css";
import RoutesLayout from "./Config/Router/Router";

function App() {
  useEffect(() => {
    const isPageRefresh =
      performance.navigation.type === performance.navigation.TYPE_RELOAD;

    if (isPageRefresh) {
      window.location.href = "/";
    }
  }, []);
  return (
    <div className="App perspective ">
      <RoutesLayout />
    </div>
  );
}

export default App;
