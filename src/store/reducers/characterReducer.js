
const INITIAL_STATE = {}
export const GET_CHARACTER = "GET_CHARACTER"
 const characterReducer = (state = INITIAL_STATE, action) => {
     switch(action.type) {
        case GET_CHARACTER: {
            return action.payload
        } 
        default: 
            return state
     }
} 

export default characterReducer