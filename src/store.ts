import { combineReducers, createStore } from "@reduxjs/toolkit";
import { mainPageReducer } from "./components/store";

const rootReducer = combineReducers({ mainPageReducer });

export const store = createStore(rootReducer);
