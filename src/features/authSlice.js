import { createSlice } from "@reduxjs/toolkit";




const authSlice =createSlice({
    name: "auth",
    initialState:{auth:null},
    reducers:{
        login: ()=>{

        },
        logOut: ()=>{

        }
    }
})

export const {login, logOut} = authSlice.actions
export const authReducer = authSlice.reducer