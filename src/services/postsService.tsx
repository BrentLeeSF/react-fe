import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


const POSTS_URL = 'https://jsonplaceholder.typicode.com';


/**
 * YOUTUBE ON FETCHING ASYNC DATA
 * https://www.youtube.com/watch?v=93CR_yURoII
 */
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    try {
        const response = await axios.get(`${POSTS_URL}/posts`);
        return response.data;
    } catch (err: any) {
        return err.message;
    }
});

export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost) => {
    try {
        const response = await axios.post(`${POSTS_URL}/posts`, initialPost);
        return response.data;
    } catch (err: any) {
        return err.message;
    }
})
