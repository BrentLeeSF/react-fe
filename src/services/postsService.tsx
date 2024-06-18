import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';


/**
 * YOUTUBE ON FETCHING ASYNC DATA
 * https://www.youtube.com/watch?v=93CR_yURoII
 */
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    try {
        const response = await axios.get(POSTS_URL);
        return response.data;
    } catch (err: any) {
        return err.message;
    }
});

export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost) => {
    try {
        const response = await axios.post(POSTS_URL, initialPost);
        return response.data;
    } catch (err: any) {
        return err.message;
    }
})
