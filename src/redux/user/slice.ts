import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchUser} from './asyncActions';
import {IUserFull, UserSliceState} from './types';
import {Status} from '../../helpers/status';
import {getUserLS, setUserLS} from '../../services/localStorageService';

const initialState: UserSliceState = {
  user: {
    id: 0,
    firstName: getUserLS().firstName,
    lastName: getUserLS().lastName,
    image: getUserLS().image,
    token: getUserLS().token,
    email: getUserLS().email,
    birthDate: getUserLS().birthDate,
    maidenName: getUserLS().maidenName,
  },
  status: Status.LOADING,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUserFull>) {
      state.user = action.payload;
    },
    logoutUser(state) {
      state.user = {
        id: 0,
        firstName: "",
        lastName: "",
        image: "",
        token: "",
        email: "",
        birthDate: "",
        maidenName: "",
      };
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.status = Status.LOADING;
      state.user = initialState.user;
      localStorage.clear();
    });

    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
      setUserLS(action.payload);
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchUser.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.user = initialState.user;
      localStorage.clear();
    });
  },
});

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
