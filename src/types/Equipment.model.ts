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
  images: Array<{
    path: string;
  }>;
  isSold: boolean;
  price: number;
  title: string;
}

export interface EquipmentCategory {
  id: string;
  name: string;
}

export interface EquipmentBrand {
  id: number;
  name: string;
}

export interface EquipmentSearchFilters {
  lowerPriceLimit: number | null;
  upperPriceLimit: number | null;
  categories: Array<number>;
  brands: Array<number>;
}
