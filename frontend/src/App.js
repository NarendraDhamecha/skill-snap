import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routing from "./Routing";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <Routing />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
