import { service } from "../plugins/AxiosConfig";

export const getEquipmentDetail = (id: string) => {
  return service.get(`/equipment/${id}`);
};

export const getCatalog = () => {
  return service.get("/equipment/catalog").then((res) => res.data);
};
