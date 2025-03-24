import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CalculatorProvider } from "./context/CalculatorContext";
import { Calculator } from "./components/Calculator";
import { Result } from "./components/Result";

function App() {
  return (
    <CalculatorProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/resultado" element={<Result />} />
        </Routes>
      </Router>
    </CalculatorProvider>
  );
}

export default App;
