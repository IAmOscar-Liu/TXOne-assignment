import { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import "./index.css";

const Weather = lazy(() => import("./pages/Weather.tsx"));
const Population = lazy(() => import("./pages/Population.tsx"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Weather />} />
          <Route path="population" element={<Population />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
