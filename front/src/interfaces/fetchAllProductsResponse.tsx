export interface FetchAllProductsResponse {
  products: Products[];
}


export interface Products {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}
