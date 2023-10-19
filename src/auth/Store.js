import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers/RootReducer";

import { sessionService } from "redux-react-session";

const initialState = {};
const middlewares = [thunk];

const Store = createStore(
  RootReducer,
  initialState,
  compose(applyMiddleware(...middlewares))
);

sessionService.initSessionService(Store);

export default Store;
