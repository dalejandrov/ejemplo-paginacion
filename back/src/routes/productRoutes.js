import { Router } from 'express';
import { ProductController } from '../controllers/productController.js';

const router = Router();

// GET /products
router.get('/', ProductController.getAllProducts);

// GET /products/:id
router.get('/:id', ProductController.getProductById);

// POST /products
router.post('/', ProductController.createProduct);

export default router;
