import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./Components/Dashboard";
import { Landing } from "./Components/Landing";
import { Routing } from "./Components/Routing";

function App() {
  return (
    <BrowserRouter>
      <Routing />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
