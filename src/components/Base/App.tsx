import { Routes, Route } from "react-router-dom";
import YourFirstComponent from "../Learning/YourFirstComponent";
import UseMemo from "../Reference/UseMemo";
import UseRef from "../Reference/UseRef";
import UseState from "../Reference/UseState";
import Home from "./Home";
import Layout from "./Layout";
import NoMatch from "./NoMatch";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Route>

        <Route path="learning" element={<Layout />}>
          <Route path="your-first-component" element={<YourFirstComponent />} />
          <Route path="*" element={<NoMatch />} />
        </Route>

        <Route path="docs" element={<Layout />}>
          <Route path="use-state" element={<UseState />} />
          <Route path="use-memo" element={<UseMemo />} />
          <Route path="use-ref" element={<UseRef />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
