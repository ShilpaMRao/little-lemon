import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" exact />
      </Routes>
    </>
  );
}

export default App;
