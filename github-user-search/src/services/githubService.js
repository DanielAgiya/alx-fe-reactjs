import axios from "axios";

const API_URL = "https://api.github.com/users/";

// Setup Axios instance
const githubService = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY || ""}`,
  },
});

// Function to fetch a user by username
export const getUser = async (username) => {
  try {
    const response = await githubService.get(`${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

export default githubService;
