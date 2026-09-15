import { createSelector } from "@reduxjs/toolkit";

// Basic selector
export const selectPosts = (state) => state.posts.posts;

// Memoized selector for completed posts
export const selectCompletedPosts = createSelector(
  [selectPosts],
  (posts) => posts.filter((post) => post.completed)
);

// Memoized selector for pending posts
export const selectPendingPosts = createSelector(
  [selectPosts],
  (posts) => posts.filter((post) => !post.completed)
);