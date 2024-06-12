
import { ADD_USER,DELETE_USER } from "./actionTypes.ts";
export interface User {
    id: number;
    name: string;
    email: string;
  }
  
  export interface UserState {
    users: User[];
  }


const initialState:UserState={
    users:[],
}
let nextId = 1;

export const userReducer=(state=initialState,action:any)=>{
    switch (action.type) {
        case ADD_USER:
            const {name,email}=action.payload;
            const isEmailExists = state.users.some(user => user.email === email);
            if (isEmailExists) {
               
               alert("email already exist")
                return state; 
            }
            return {
                ... state,
                users: [...state.users, { id:nextId++, name, email }],
            }
        case DELETE_USER:
            const userIdToDelete=action.payload.id;
            return {
                ...state,
                users: state.users.filter(user => user.id !== userIdToDelete),
              };

            
          
    
        default:
            return state
    }



}
