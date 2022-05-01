import axios from "axios";

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
