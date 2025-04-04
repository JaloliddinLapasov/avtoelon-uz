export interface Ad {
  id: number;
  title: string;
  category: string;
  price: number;
  currency: string;
  description: string;
  location: string;
  imageUrl?: string;
  contactName: string;
  contactPhone: string;
}
