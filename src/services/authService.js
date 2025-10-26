import api from "./apiClient";

export const loginUser=async(data)=>{
 const res = await api.post("/auth/login", data);
 return res.data;
}

export const getUserProfile = async () => {
  const res = await api.get("/auth/me");
  return res.data;
};