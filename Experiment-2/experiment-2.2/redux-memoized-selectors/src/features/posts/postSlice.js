import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      id: 1,
      title: "Learn Redux Toolkit",
      completed: false,
    },
    {
      id: 2,
      title: "Practice Memoized Selectors",
      completed: true,
    },
  ],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },

    deletePost: (state, action) => {
      state.posts = state.posts.filter(
        (post) => post.id !== action.payload
      );
    },

    togglePost: (state, action) => {
      const post = state.posts.find(
        (post) => post.id === action.payload
      );

      if (post) {
        post.completed = !post.completed;
      }
    },
  },
});

export const {
  addPost,
  deletePost,
  togglePost,
} = postSlice.actions;

export default postSlice.reducer;