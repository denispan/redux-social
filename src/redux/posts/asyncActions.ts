import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {IPost} from './types';

interface FetchPosts {
  posts: IPost[];
}

export const fetchPosts = createAsyncThunk<FetchPosts>(
  'post/fetchPostsStatus',
  async () => {
    const { data} = await axios.get<FetchPosts>(`https://dummyjson.com/posts`, {

    });

    return data;
  },
);
