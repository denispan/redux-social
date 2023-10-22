import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {IUser} from './types';

interface Props {
  username: string;
  password: string;
}

export const fetchUser = createAsyncThunk(
  'post/fetchUserStatus',
  async ({username, password}: Props) => {
    const { data} = await axios.post<IUser>(
      `https://dummyjson.com/auth/login`,
      {
        username: username,
        password: password,
      },
      {
        headers: {
          'Content-Type': 'application/json'
        },
      }
    );

    return data;
  },
);
