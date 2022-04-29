import * as yup from "yup";

export const categories = [
  {
    id: "1",
    name: "Refurbished (Up to Spec)",
  },
  {
    id: "2",
    name: "Cat 2",
  },
];

export const sellFormValidation = yup.object({
  name: yup.string().nullable().required("Name is required"),
  description: yup.string().nullable().required("Description is required"),
  price: yup.number().nullable().required("Price is required"),
  categories: yup.array().min(1, "Select at least one category"),
});

export const mockEquipment = {
  id: 1,
  title: "Used Marathon WS 5043-830 Open End Auto-Tie Horizontal Baler",
  price: "65,000.00",
  location: "Salt Lake City, UT, US",
  distance: "719",
  categories: ["Refurbished (Up To Spec)"],
  condition: "Refurbished (Up to Spec)",
  phone: "1234567819",
  images: [],
};

export const PRIMARY_COLOR = "#f1233c";
