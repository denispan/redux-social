import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {IUser, IUserFull} from './types';

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

    const {data: fullData} = await axios.get<IUserFull>(
      `https://dummyjson.com/auth/users/${data.id}`,
      {
        headers: {
          'Authorization': `Bearer ${data.token}`,
          'Content-Type': 'application/json'
        },
      }
    );

    return {
      ...data,
      email: fullData.email,
      birthDate: fullData.birthDate,
      maidenName: fullData.maidenName,
    };
  },
);
