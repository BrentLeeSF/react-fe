import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
    posts: []
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get(POSTS_URL);
    
    const testhThis = response.data.map((hey: any) => {
        console.log('ANY = ',hey.id);
    })
    return response.data
});

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state: any, action: any) {
                state.posts.push(action.payload)
            },
            prepare(id: number, productDiscription: string) {
                return {
                    payload: {
                        id,
                        productDiscription
                    }
                }
            }
        }
    }
});

export const selectAllPosts = (state: any) => state.posts.posts;

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer;