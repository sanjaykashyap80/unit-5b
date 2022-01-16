import { createStore, combineReducers } from "redux";
import { reducer as TodosReducer } from "../features/Todos/reducer";
import { reducer as CounterReducer } from "../features/Counter/reducer";

const rootReducer = combineReducers({
    counterState: CounterReducer,
    todosState: TodosReducer,
    // auth: AuthReduer
})

// export const store = createStore(TodosReducer);
// export const store = createStore(CounterReducer);

export const store = createStore(rootReducer
    ,
    window.__REDUX_DEVTOOLS_EXTENSION__()
);
// console.log("Enter store", store.getState())
