import ProductService from '../services/productService.js';

export class ProductController {
  static async getAllProducts(req, res) {
    try {
      const products = await ProductService.getAllProducts();
      res.json({
        products
      });
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving products' });
    }
  }

  static async getProductById(req, res) {
    try {
      const productId = parseInt(req.params.id);
      const product = await ProductService.getProductById(productId);
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving product' });
    }
  }

  static async createProduct(req, res) {
    try {
      const productData = req.body;
      const newProduct = await ProductService.createProduct(productData);
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Error creating product' });
    }
  }
}
