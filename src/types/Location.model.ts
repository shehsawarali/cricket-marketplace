interface Location {
  description: string;
  place_id: string;

  country: string;
  structured_formatting: {
    main_text: string;
    secondary_text: string;
  };
}

export default Location;
