export interface Equipment {
  id: number;
  title: string;
  price: string;
  location: string;
  distance: string;
  categories: Array<string>;
}

export interface EquipmentDetail {
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
