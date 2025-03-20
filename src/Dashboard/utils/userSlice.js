import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import  {api} from  "../utils/api";
import axios from "axios";


export const getUser  = createAsyncThunk('getUser' , async(_, {rejectWithValue})=>{
    try
    {   
        const response = await axios.get(`${api}getalluser`,{withCredentials:true});
        return response.data;

    }
    catch(error){
        return rejectWithValue(error.response?.data || "Something went wrong");
    }


})






const userSlice  =   createSlice({
   
      name:"user",
      initialState:{
        loading:false ,
        error:null,
        user:null
      },
      extraReducers:(builder)=>{
        builder
         .addCase(getUser.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                  })
          .addCase(getUser.fulfilled, (state, action) => {
                    state.loading = false;
                    state.user = action.payload
                  })
         .addCase(getUser.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload;
                  })
        

         
      }





})

export default  userSlice.reducer  ;
