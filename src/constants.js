import * as yup from "yup";
import TechnicalDataField from "./components/TechnicalDataField/TechnicalDataField";
import React from "react";

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

export const mockEquipment = {
  id: "1",
  name: "Used Marathon WS 5043-830 Open End Auto-Tie Horizontal Baler",
  price: "65,000.00",
  location: "Salt Lake City, UT, US",
  distance: "719",
  categories: ["Refurbished (Up To Spec)"],
};

export const mockTechnicalData = {
  "Manual / Auto Tie": "Auto",
  "Cylinder Size": `8"`,
  "Motor Horsepower": `21-30 HP`,
  "Feed Opening Length": `40"-60"`,
  "Feed Opening Width": `31"-42"`,
  "Hooper Opening Length": `21-30 HP`,
  "Hopper Opening Width": `9"`,
  "Bale Size Width": `51-75 HP`,
  "Bale Size height": `11"`,
};

export const mockPhoneNumber = "923313661000";
