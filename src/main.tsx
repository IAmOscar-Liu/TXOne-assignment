import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout.tsx";
import "./index.css";
import Population from "./pages/Population.tsx";
import Weather from "./pages/Weather.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Weather />} />
          <Route path="/population" element={<Population />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
