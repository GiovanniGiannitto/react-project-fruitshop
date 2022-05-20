import "./App.css";
import { Footer } from "./components/Footer";
// import { Navbar } from "./component/Navbar";
import { Landing } from "./pages/Landing";

function App() {
  return (
    <div className="relative ">
      {/* <Navbar /> */}
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
