import { service } from "../plugins/AxiosConfig";

export const getEquipmentDetail = (id: string) => {
  return service.get(`/equipment/${id}`);
};

export const getCatalog = (
  page: number,
  coordinates: { lat: number; lng: number }
) => {
  let url: string = `/equipment?page=${page}`;

  if (coordinates) {
    url += `&lat=${coordinates.lat}&lng=${coordinates.lng}`;
  }

  return service.get(url).then((res) => res.data);
};

export const getActiveListings = () => {
  return service.get("/equipment?status=active").then((res) => res.data);
};

export const getSoldListings = () => {
  return service.get("/equipment?status=sold").then((res) => res.data);
};

export const getCategories = () => {
  return service.get("/categories").then((res) => res.data);
};

export const getSearchResults = (query: string) => {
  return service.get(`/equipment?page=1`).then((res) => res.data);
};

export const markEquipmentAsSold = (id: number) => {
  return service.post("/equipment/sold", { id }).then((res) => res.data);
};

export const createEquipment = (data: {
  title: string;
  description: string;
  price: number;
  location: string;
  categories: Array<number>;
  brand_id: number;
}) => {
  return service.post(`/equipment`, data);
};
