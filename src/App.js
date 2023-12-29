import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Faq from "./pages/Faq1/Faq1";
import Workers from "./pages/workers/workers.jsx";
import deliver from "./pages/Deliver/Deliver.jsx";
import Coca from "./pages/Home/Populareats/Carts/Coca/Coca.jsx";
import Burger from "./pages/Home/Populareats/Carts/Burger/Burger.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/faq" Component={Faq} />
        <Route path="/workers" Component={Workers} />
        <Route path="/deliver" Component={deliver} />

        <Route path="/coca-cola" Component={Coca} />
        <Route path="/burger" Component={Burger} />
      </Routes>
    </div>
  );
}

export default App;
