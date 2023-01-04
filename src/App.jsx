import { useRoutes } from "react-router-dom";
import routesList from "./include/routes";
function App() {
  let routes = useRoutes(routesList);
  return (
    <div className="App">
      {routes}
      {/* <Auth /> */}
    </div>
  );
}

export default App;
