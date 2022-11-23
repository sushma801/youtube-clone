import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { USER_URL } from "./API";

const initialState ={
    AllUser:[],
    login:false,
    user:[]
}
export const GetAllUser = createAsyncThunk(
    "GetAllUser",
    async()=>{
        try{
            const {data} = await axios.get(`${USER_URL}`);
            return data;
        }catch(e){
            return e.message;
        }
    }
)
const userSlice = createSlice({
    name:"User",
    initialState,
    reducers:{
        isPresent(state,action){
            state.login=action.payload;
        },
        setUser(state,action){
            state.user = action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(GetAllUser.fulfilled,(state,action)=>{
            state.AllUser = action.payload;
        })
    }
});
export const {isPresent,setUser} = userSlice.actions;
export default userSlice;