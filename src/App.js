import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Routes>
        <Route path="/" component={Home} />
      </Routes>
    </>
  );
}

export default App;
