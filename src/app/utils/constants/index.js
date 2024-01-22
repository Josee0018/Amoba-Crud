export const API_URL = "http://localhost:8080";

export const API_ROUTES = {
  HOME: "home",
  LOGIN: `${API_URL}/auth/login`,
  REGISTER: `${API_URL}/auth/register`,
  LOGOUT: `${API_URL}/auth/logout`,
  PEOPLE: `${API_URL}/people`,
};
