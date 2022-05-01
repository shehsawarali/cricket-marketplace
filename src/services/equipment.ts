import { service } from "../plugins/AxiosConfig";
import axios from "axios";

export const getEquipmentDetail = (id: string) => {
  return service.get(`/equipment/${id}`);
};

export const getCatalog = (page: number) => {
  return service.get(`/equipment?page=${page}`).then((res) => res.data);
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

export const getLocationPredictions = (query: string) => {
  return axios
    .get(`https://crickpro.com/api/get/location?q=${query}`, {
      headers: {
        "x-dev": "shehsawar",
      },
    })
    .then((res) => res.data);
};

export const getLocationDetail = (placeId: string) => {
  return axios
    .get(`https://crickpro.com/api/location/data?place_id=${placeId}`, {
      headers: {
        "x-dev": "shehsawar",
      },
    })
    .then((res) => res.data);
};
