export interface Equipment {
  id: number;
  title: string;
  price: string;
  location: string;
  distance: string;
  images: Array<string>;
  categories: Array<string>;
  condition?: string;
  phone: string;
}

export interface EquipmentListing {
  id: number;
  images: Array<string>;
  isSold: boolean;
  price: number;
  title: string;
}
