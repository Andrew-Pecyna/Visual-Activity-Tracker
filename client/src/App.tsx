import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ReactHeatMap from "./pages/ReactHeatMap";
import './index.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/reactheatmap" element={<ReactHeatMap />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
