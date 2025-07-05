// API Configuration for development and production
const isDevelopment = process.env.NODE_ENV === 'development';

// Base URLs for different environments
const API_BASE_URL = isDevelopment 
  ? 'http://localhost:3001/api' 
  : '/api';

// Swiggy API endpoints
export const SWIGGY_API = {
  RESTAURANTS_LIST: `${API_BASE_URL}/swiggy/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`,
  MENU: (resId) => `${API_BASE_URL}/swiggy/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
};

// GitHub API endpoints
export const GITHUB_API = {
  USER: (username) => `${API_BASE_URL}/github/users/${username}`
};

// CDN URLs
export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const LOGO_URL = "https://api.logo.com/api/v2/images?design=lg_rVsEIGhchOEPV5HFuQ&u=1730784295485&width=500&height=400&margins=100&fit=contain&format=webp&quality=60"; 