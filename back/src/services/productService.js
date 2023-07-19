import Product from '../models/product.js';

export default class ProductService {

  // static async getAllProducts(page, pageSize) {
  //   try {
  //     const products = await Product.getAllProducts(page, pageSize);
  //     return products;
  //   } catch (error) {
  //     console.error('Error al obtener los productos', error);
  //     throw new Error('Error al obtener los productos');
  //   }
  // }

  // ! Sin cache
  static async getAllProducts() {
    try {
      return await Product.getAllProducts();
    } catch (error) {
      throw new Error('Error al obtener los productos');
    }
  }

  static async getProductById(productId) {
    try {
      return await Product.getProductById(productId);
    } catch (error) {
      throw new Error(`Error al obtener el producto ${productId}`);
    }
  }

  static async createProduct(productData) {
    try {
      return await Product.createProduct(productData);
    } catch (error) {
      throw new Error('Error al crear producto');
    }
  }
}
