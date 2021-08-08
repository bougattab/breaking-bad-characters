
import { GET_CHARACTERS } from "../reducers/charactersReducer"
import axios from "axios"
import { GET_CHARACTER } from "../reducers/characterReducer"

const API_BASE_URL = "https://breakingbadapi.com/api"


export const getCharacters =  () => {
    return async (dispatch) => {
        const {data} = await axios.get(`${API_BASE_URL}/characters`)
        dispatch ({type : GET_CHARACTERS, payload : data})
    }
}

export const getCharacter = (id) => {
    return async (dispatch) => {
        const {data} = await axios.get(`${API_BASE_URL}/characters/${id}`)
        dispatch ({type: GET_CHARACTER, payload: data[0]})
    }
}