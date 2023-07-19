import ProductService from '../services/productService.js';

export class ProductController {
  static async getAllProducts(req, res) {
    const products = await ProductService.getAllProducts();
    res.json({
      products
    });
  }

  static async getProductById(req, res) {
    const productId = parseInt(req.params.id);
    const product = await ProductService.getProductById(productId);
    res.json(product);
  }

  static async createProduct(req, res) {
    const productData = req.body;
    const newProduct = await ProductService.createProduct(productData);
    res.status(201).json(newProduct);
  }
}
