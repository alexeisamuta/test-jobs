import {configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk'
import {jobReducer} from "./reducers/job-reducer";


// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = createStore(jobReducer,composeEnhancers(applyMiddleware(thunkMiddleware)))
// export const store = createStore(jobReducer,composeEnhancers(applyMiddleware(thunkMiddleware)))
export const store = configureStore({
    reducer: jobReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

export type RootStore = ReturnType<typeof jobReducer>