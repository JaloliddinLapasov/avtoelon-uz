export interface Car {
imageUrls: any;
  id: number;
  name: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  location: string;
  contactName: string;
  contactPhone: string;
  createdAt: Date;
  carPicturesNames: string[];
}


export enum Currency {
  USD = 'usd',
  UZS = 'uzs',
  RUB = 'rub'
}

export enum Category {
  YengilAvtomobillar = 'yengil_avtomobillar',
  EhtiyotQismlar = 'extiyot_qisimlar',
  Xizmatlar = 'xizmatlar'
}

export enum Location {
  Andijon = 'Andijon',
  Buxoro = 'Buxoro',
  Fargona = "Farg'ona",
  Jizzax = 'Jizzax',
  Xorazm = 'Xorazm',
  Navoiy = 'Navoiy',
  Namangan = 'Namangan',
  Samarkand = 'Samarkand',
  Sirdaryo = 'Sirdaryo',
  Toshkent = 'Toshkent',
  Surxandaryo = 'Surxandaryo',
  Qashqadaryo = 'Qashqadaryo'
}

export interface CarDto {
  id?: number;
  name: string;
  description: string;
  price: number;
  currency: Currency;
  category: Category;
  location: Location;
  contactName: string;
  contactPhone: string;
  createdAt: Date;
  carPicturesNames: string[];
}

export interface CreateCarDto {
  carName: string;
  description: string;
  carPrice: number;
  contactPhone: string;
  carPictures: File[];
}

export interface UpdateCarDto {
  carName?: string;
  description?: string;
  carPrice?: number;
  contactPhone?: string;
  carPictures?: File[];
}

export interface EnumQueryObject {
  currency: Currency;
  category: Category;
  location: Location;
}

export interface QueryObject {
  name?: string;
  city?: string;
  price?: number;
  sortBy?: string;
  isDescending?: boolean;
  pageNumber?: number;
  pageSize?: number;
}