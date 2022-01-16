import { INC_COUNT } from "./actionTypes"

export const incCount = (count) => {
    return {
        type: INC_COUNT,
        payload: count,
    }
}