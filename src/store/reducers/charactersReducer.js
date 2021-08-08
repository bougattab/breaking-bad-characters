
export const GET_CHARACTERS = "GET_CHARACTERS"
const INITIAL_STATE = []
 const charactersReducer = (state = INITIAL_STATE, action) => {
     switch(action.type) {
         case GET_CHARACTERS:
             return action.payload
         default: 
            return [...state]
     }
} 

export default charactersReducer