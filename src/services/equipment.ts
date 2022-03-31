import { service } from "../plugins/AxiosConfig";

export const getEquipmentDetail = (id: string) => {
  return service.get(`/equipment/${id}`);
};

export const getCatalog = (page: number) => {
  return service.get(`/equipment/catalog?page=${page}`).then((res) => res.data);
};

export const getMyListings = () => {
  return service.get("/equipment/user/active/listing").then((res) => res.data);
};

export const getCategories = () => {
  return service.get("/equipment/categories").then((res) => res.data);
};
