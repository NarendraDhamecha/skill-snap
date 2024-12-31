import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routing from "./Routing";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routing />
    </BrowserRouter>
  );
}

export default App;