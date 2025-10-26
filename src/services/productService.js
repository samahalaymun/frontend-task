import api from "./apiClient";

export const getProducts = async ({ page, limit }) => {
  const skip = (page - 1) * limit;
  const res = await api.get("/products", { params: { limit, skip } });
  return res.data;
};

export const getProductDetails = async (id) => {
  const res = await api.get(`/products/${id}`);
  return res.data;
};


