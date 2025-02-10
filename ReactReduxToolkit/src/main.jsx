import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*Provider-a store-umuzu tanıtmalıyıq. Provider-in store adında bir dəyişəni var. Bu store-a store yazsaq bizə birbaşa store-da olan şeyi götürüb göstərəcək. Biz bu store-u App-ın içində istənilən yerdə istifadə edə bilərik. Biz buna Context APİ-da da bu şəkildə istifadə edirdik. Orda necə istifadə edirdiksə burda da eyni şəkildə istifadə edirik. */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
