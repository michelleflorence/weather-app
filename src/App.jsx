import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import { SavedCities } from "./components";
import { useStateContext } from "./context";

function App() {
  const { savedCities } = useStateContext(); // Access savedCities from your context
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/savedcities"
          element={<SavedCities cities={savedCities} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
