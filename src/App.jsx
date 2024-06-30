import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Routing } from "./Components/Routing";
const Dashboard = lazy(() => import("./Components/Dashboard.jsx"));
const Landing = lazy(() => import("./Components/Landing.jsx"));

function App() {
  return (
    <BrowserRouter>
      <Routing />
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={"loading..."}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="/"
          element={
            <Suspense fallback={"...loading"}>
              <Landing />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
