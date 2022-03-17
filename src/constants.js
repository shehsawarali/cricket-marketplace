import * as yup from "yup";

export const categories = [
  {
    id: 1,
    name: "Refurbished (Up to Spec)",
  },
  {
    id: 2,
    name: "Cat 2",
  },
];

export const sellFormValidation = yup.object({
  name: yup.string().nullable().required("Name is required"),
  description: yup.string().nullable().required("Description is required"),
  location: yup.string().nullable().required("Location is required"),
  price: yup.string().nullable().required("Price is required"),
  categories: yup.array().min(1, "Select at least one category"),
});
