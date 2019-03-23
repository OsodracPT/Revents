import { createStore, applyMiddleware, compose } from "redux";

export const configureStore = preloadedState => {
  const middlewares = [];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const storeEnhancers = [middlewareEnhancer];

  const composeEnhancer = compose(...storeEnhancers);

  const store = createStore(rootReducer, preloadedState, composeEnhancer);
  return store;
};
