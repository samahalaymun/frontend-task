export const saveToken = (token) => localStorage.setItem("accessToken", token);
export const getToken = () => localStorage.getItem("accessToken");
export const clearToken = () => localStorage.removeItem("accessToken");

export const getUser = () => JSON.parse(localStorage.getItem("user"));
export const saveUser = (user) => localStorage.setItem("user", JSON.stringify(user));
export const clearUser = () => localStorage.removeItem("user");