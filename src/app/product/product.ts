export interface Product {
  id: string;
  imageSource: string;
  title: string;
  rating: number;
  reviewCount: number;
  isLimitedDeal?: boolean;
  currency: string;
  sellingPrice: number;
  costPrice: number;
  discount: number;
  discountTexts?: string[];
  deliveryText: string;
  deliveryDate: Date;
  additionalDeliveryTexts?: string[];
}
