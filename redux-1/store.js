import {createStore} from "redux"
import {reducer} from "./reducer.js"
 
const init = {count:0, todo: []}

export const store = createStore(reducer, init); // fixed 

