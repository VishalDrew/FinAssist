import api from "../api/api";

export const getHealth = async () => {
    const response = await api.get("/health");
    return response.data;
};