/**
 * API functions for JSONPlaceholder
 */

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Fetch posts from JSONPlaceholder
export const fetchPosts = async (page = 1, limit = 10) => {
  try {
    const response = await fetch(
      `${BASE_URL}/posts?_page=${page}&_limit=${limit}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

// Fetch users from JSONPlaceholder
export const fetchUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Search posts by title
export const searchPosts = async (query, page = 1, limit = 10) => {
  try {
    const response = await fetch(
      `${BASE_URL}/posts?q=${query}&_page=${page}&_limit=${limit}`
    );
    if (!response.ok) {
      throw new Error('Failed to search posts');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error searching posts:', error);
    throw error;
  }
};