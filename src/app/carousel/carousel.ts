export interface CarouselItem {
  id: number;
  imageSource: string;
  isSponsored?: boolean;
  name?: string;
  rating?: number;
  reviewcount?: number;
  currency?: string;
  sellingPrice?: number;
  pricePerUnit?: number;
  unit?: string;
  costPrice?: number;
  discount?: number;
  additionalDiscountDetails?: string[]; // array declaration
  deliveryText?: string;
  deliveryDate?: Date;
  additionalDeliveryDetails?: string[];
  isMarked?: boolean;
  markerText?: string; //optional parameter
}

export interface Carousel {
  title: string;
  linkName?: string;
  linkURL?: string;
  items: CarouselItem[];
}

export interface CarouselItemDetails {
  id: number;
  imageSource: string;
  isSponsored?: boolean;
  name?: string;
  rating?: number;
  reviewcount?: number;
  currency?: string;
  sellingPrice?: number;
  pricePerUnit?: number;
  unit?: string;
  costPrice?: number;
  discount?: number;
  additionalDiscountDetails?: string[]; // array declaration
  deliveryText?: string;
  deliveryDate?: Date;
  additionalDeliveryDetails?: string[];
  isMarked?: boolean;
  markerText?: string; //optional parameter
}
