import { configureStore } from "@reduxjs/toolkit";
import reducer from "./students";


export default function () {
  return configureStore({reducer});
}

