import { createStore } from "redux";
import {userReducer}from "./userreducer.ts";
import { composeWithDevTools } from '@redux-devtools/extension';

const store=createStore(userReducer,composeWithDevTools());
export default store;
export type RootState = ReturnType<typeof store.getState>;