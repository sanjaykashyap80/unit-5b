import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducer as TodosReducer } from "../features/Todos/reducer";
import { reducer as CounterReducer } from "../features/Counter/reducer";
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    counterState: CounterReducer,
    todosState: TodosReducer,
    // auth: AuthReduer
})

// export const store = createStore(TodosReducer);
// export const store = createStore(CounterReducer);

// function middleware(req,res,next){ }

// function logger1(store) {
//     return function(next) {
//         return function(actions) {

//         }
//     }
// }

// function logger2(store) {
//     return function(next) {
//         return function(actions) {

//         }
//     }
// }

const logger2 = (store) => (next) => (action) => {
    // console.log("inside logger2", action)
    next(action)
    // console.log("Exiting logger2")
}

// const logger1 = (store) => (next) => (action) => {
//     // console.time("p1")
//     // console.log("Received action:", action)
//     if(typeof action === "function") {
//        return action(store.dispatch)
//     }
//     next(action)
//     // console.timeEnd("p1")
// }

// const errorReport = (store) => (next) => (action) => {
//    try {
//     next(action)
//    } catch (e) {
//        // report error to server
//    }

// }

export const store = createStore(
    rootReducer,
    // applyMiddleware(logger1),
    // applyMiddleware(thunk),
    // compose(applyMiddleware(logger1), window.__REDUX_DEVTOOLS_EXTENSION__())
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
    // ,
    // window.__REDUX_DEVTOOLS_EXTENSION__()
);
// console.log("Enter store", store.getState())

// styled.div'

// '
