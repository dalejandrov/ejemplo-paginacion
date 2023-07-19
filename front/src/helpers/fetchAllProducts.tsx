import { productsApi } from '../api/productsApi';
import { FetchAllProductsResponse, Products } from '../interfaces/fetchAllProductsResponse';

export const fetchAllProducts = async (): Promise<Products[]> => {
  const resp = await productsApi.get<FetchAllProductsResponse>('/products');
  // console.log(resp.data.products);

  return resp.data.products;
}
