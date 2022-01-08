import { INC_COUNT,DEC_COUNT } from "./actionTypes.js";

// action creators: function
export const incCount = (data) => {
    return { type: INC_COUNT, payload: data}
}