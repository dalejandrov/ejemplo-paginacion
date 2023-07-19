// import { faker } from '@faker-js/faker';
import db from '../config/database.js';

export default class Product {
  static async getAllProducts() {

    const query = 'SELECT * FROM products';
    const result = await db.query(query);
    console.log(await result);
    return result;
  }

  static async getProductById(productId) {
    const query = 'SELECT * FROM products WHERE id = $1';
    const result = await db.query(query, [productId]);
    return result;
  }

  static async createProduct(productData) {
    const { name, price, image } = productData;
    const query = 'INSERT INTO products (name, description, price, image) VALUES ($1, $2, $3, $4) RETURNING *';
    const result = await db.query(query, [name, description, price, image]);
    return result;
  }
}

// !Descometar para generar fakedata
// console.log(faker.commerce.productName(),
//   faker.commerce.productDescription(),
//   faker.commerce.price(),
//   faker.image.url())

// async function insertFakeData() {
//   try {
//     const fakeData = [
//       {
//         name: faker.commerce.productName(),
//         description: faker.commerce.productDescription(),
//         price: faker.commerce.price(),
//         image: faker.image.url()
//       },
//       // Agrega aquí más objetos con datos falsos
//     ];

//     for (const data of fakeData) {
//       const query = 'INSERT INTO products (name, description, price, image) VALUES ($1, $2, $3, $4)';
//       const values = [data.name, data.description, data.price, data.image];
//       await db.query(query, values);
//     }

//     console.log('Datos falsos insertados exitosamente.');
//   } catch (error) {
//     console.error('Error al insertar los datos falsos:', error);
//   }
// }

// insertFakeData();
