import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {IPost} from './types';
import {useSelector} from 'react-redux';
import {selectUserData} from '../user/selectors';
import {getUserLS} from '../../services/localStorageService';

interface FetchPostsProps {
  posts: IPost[];
}

interface FetchProps {
  token: string
}

export const fetchPosts = createAsyncThunk(
  'post/fetchPostsStatus',
  async ({token}: FetchProps) => {
    const { data} = await axios.get<FetchPostsProps>(`https://dummyjson.com/auth/posts`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    });

    return data;
  },
);
