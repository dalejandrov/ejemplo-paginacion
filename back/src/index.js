import express from 'express';
import cookieParser from 'cookie-parser';

import config from './config/config.js';
import productRoutes from './routes/productRoutes.js';

const app = express();
const port = config.port;

app.use('/products', productRoutes);


app.listen(port, () => {
  console.log(`App runing in: http://localhost:${port} 🚀`)
});
