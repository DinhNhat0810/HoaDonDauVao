import "./App.css";

import useRouteElement from "./hooks/useRouteElements";

function App() {
  const routeElements = useRouteElement();

  return <div className="app">{routeElements}</div>;
}

export default App;
