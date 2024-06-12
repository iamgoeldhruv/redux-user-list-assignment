import { ADD_USER,DELETE_USER } from "./actionTypes.ts";


export interface AddUserAction {
    type: typeof ADD_USER;
    payload: {
    4
      name: string;
      email: string;
    };
  }
  
  export interface DeleteUserAction {
    type: typeof DELETE_USER;
    payload: {
      id: number;
    };
  }


export const addUser = (name: string, email: string): AddUserAction => ({
    type: ADD_USER,
    payload: { name, email },
  });
  
  export const deleteUser = (id:number): DeleteUserAction => ({
    type: DELETE_USER,
    payload: { id },
  });