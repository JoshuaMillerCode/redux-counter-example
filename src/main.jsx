import ReactDOM from "react-dom/client";

// IMPORT PROVIDER FROM REACT-REDUX LIBRARY TO CONNECT REACT AND REDUX APPLICATIONS
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./app/store";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);