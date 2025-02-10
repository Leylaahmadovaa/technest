import { configureStore } from "@reduxjs/toolkit";

import counterStore from "./counterStore";
import authStore from "./auth";
const store=configureStore({
    reducer:{counter:counterStore,auth:authStore}
})

export default store;