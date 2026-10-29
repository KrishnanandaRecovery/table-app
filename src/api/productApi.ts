import apiClient from "./client";

export const getAllProducts = async (signal: AbortSignal) => {
    const response = await apiClient.get('/products', { signal });
    return response.data;
};
