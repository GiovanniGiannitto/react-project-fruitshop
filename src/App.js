import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Homepage } from "./pages/Homepage";
import { Landing } from "./pages/Landing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing />
              <Footer />
            </>
          }
        />
        <Route path="home" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
