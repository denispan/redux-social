import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchPosts} from './asyncActions';
import {IPost, PostsSliceState} from './types';
import {Status} from '../../helpers/status';

const initialState: PostsSliceState = {
  posts: [],
  status: Status.LOADING,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<IPost[]>) {
      state.posts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.status = Status.LOADING;
      state.posts = [];
    });

    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload.posts;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.posts = [];
    });
  },
});

export const { setPosts } = postsSlice.actions;

export default postsSlice.reducer;
