import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts, addNewPost } from '../../services/postsService';
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
    posts: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state: any, action: any) {
                state.posts.push(action.payload)
            },
            prepare(title, content, userId, id) {
                return {
                    payload: {
                        id,
                        title,
                        content,
                        userId
                    }
                }
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                console.log('FulFilled 1 = ',action.payload);
                state.status = 'succeeded'
                const loadedPosts = action.payload.map((post: any) => {
                    return post;
                });

                // Add any fetched posts to the array
                state.posts = state.posts.concat(loadedPosts)
            })
            .addCase(fetchPosts.rejected, (state: any, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(addNewPost.fulfilled, (state: any, action: any) => {
                // Fix for API post IDs:
                // Creating sortedPosts & assigning the id 
                // would be not be needed if the fake API 
                // returned accurate new post IDs
                console.log('FulFilled 2 = ',state.posts);
                const sortedPosts = state.posts.sort((a: any, b: any) => {
                    if (a.id > b.id) return 1
                    if (a.id < b.id) return -1
                    return 0
                })
                action.payload.id = sortedPosts[sortedPosts.length - 1].id + 1;
                // End fix for fake API post IDs 

                action.payload.userId = Number(action.payload.userId)
                state.posts.push(action.payload)
            })
    }
})

export const selectAllPosts = (state: any) => state.posts;
export const getPostsStatus = (state: any) => state.status;
export const getPostsError = (state: any) => state.error;

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer
