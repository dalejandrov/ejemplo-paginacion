import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import axios from 'axios';
// import { createClient } from 'redis';


import config from './config/config.js';
import productRoutes from './routes/productRoutes.js';


// !Descomentar para probar cache rick and morty
// const client = createClient();

// client.on('error', err => console.log('Redis Client Error', err));

// await client.connect();

const app = express();
const port = config.port;

app.use(cors());

app.use('/products', productRoutes);

// !Ejemplo de cache con api rick and morty
// app.get('/character', async (req, res) => {

//   try {
//     let value = await client.get('characters');
//     if (!value) {
//       const response = await axios.get('https://rickandmortyapi.com/api/character');
//       value = JSON.stringify(response.data);
//       await client.set('characters', value);
//     }
//     return res.json(JSON.parse(value));
//   } catch (error) {
//     console.error('Error retrieving character data', error);
//     return res.status(error.response.status).json({ message: error.message });
//   }
// })

app.listen(port, () => {
  console.log(`App runing in: http://localhost:${port} 🚀`)
});
