export interface VariantDetails {
  title: string;
  rating: number;
  price: { mrp: number; sellingPrice: number };
}

export interface ProductDetailsModel {
  offers: string[];
  hierarchy: string[];
  optionTypes: OptionType[];
}

export interface OptionType {
  type: string;
  options: string[];
}

export interface Ratings {
  ratings: number[];
}

export interface Options {
  type: string;
  value: string;
}