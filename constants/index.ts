export interface CardComponentProps {
  title: string;
  rating?: number;
  imageUrl: string;
  price: string;
  // price: number;
  discount?: number;
  review?: number;
  favorite?: boolean;
  onSale?: boolean;
}