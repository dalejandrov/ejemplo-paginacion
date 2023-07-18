// services/productService.js
import Product from '../models/product.js';

export default class ProductService {
  static async getAllProducts() {
    try {
      return await Product.getAllProducts();
    } catch (error) {
      throw new Error('Error retrieving products');
    }
  }

  static async getProductById(productId) {
    try {
      return await Product.getProductById(productId);
    } catch (error) {
      throw new Error('Error retrieving product');
    }
  }

  static async createProduct(productData) {
    try {
      return await Product.createProduct(productData);
    } catch (error) {
      throw new Error('Error creating product');
    }
  }
}
