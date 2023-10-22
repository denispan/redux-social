import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchUser} from './asyncActions';
import {IUser, UserSliceState} from './types';
import {Status} from '../../helpers/status';
import {setToken} from '../../services/localStorageService';

const initialState: UserSliceState = {
  user: {
    id: 0,
    firstName: "",
    lastName: "",
    image: "",
    token: "",
  },
  status: Status.LOADING,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.status = Status.LOADING;
      state.user = initialState.user;
      setToken("");
    });

    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
      setToken(action.payload.token);
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchUser.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.user = initialState.user;
      setToken("");
    });
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
