import { useEffect, useState } from 'react';
import { fetchAllProducts } from '../helpers/fetchAllProducts';
import { Products } from '../interfaces/fetchAllProductsResponse';

export const useProduct = () => {

  const [isLoading, setisLoading] = useState(true);
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {

    fetchAllProducts()
      .then(products => {
        setisLoading(false);
        setProducts(products);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  return {
    isLoading,
    products
  }
}
