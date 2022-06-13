import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import youtube from "../api/youtube";


export const fetchVideos = createAsyncThunk('video/fetchVideos', async (query) => {
    const response = await youtube.get('/search', {
        params: {
            part:'snippet',
            maxResults:5,
            key:'AIzaSyA71IASTrF9JuWH-GxZFijB99Ipr4Gik38',
            q:query
        }
    })

    console.log(response.data.items);
})


const videoSlice = createSlice({
    name: "video",
    initialState: {
        items:[],
        loading:false,
    },
    reducers:{
        
    },
    extraReducers:{
        [fetchVideos.pending]:(state)=>{
            state.loading = true;
        },
        [fetchVideos.fulfilled]:(state,action)=>{
            state.items = action.payload;
            state.loading = false;
        },
        [fetchVideos.rejected]:(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        }
    }
});


export default videoSlice.reducer;