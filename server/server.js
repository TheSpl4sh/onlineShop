const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
require('dotenv').config();

const globalConfigs = require('./routes/globalConfigs');
const customers = require('./routes/customers');
const catalog = require('./routes/catalog');
const products = require('./routes/products');
const colors = require('./routes/colors');
const sizes = require('./routes/sizes');
const filters = require('./routes/filters');
const subscribers = require('./routes/subscribers');
const cart = require('./routes/cart');
const orders = require('./routes/orders');
const links = require('./routes/links');
const pages = require('./routes/pages');
const slides = require('./routes/slides');
const wishlist = require('./routes/wishlist');
const comments = require('./routes/comments');
const shippingMethods = require('./routes/shippingMethods');
const paymentMethods = require('./routes/paymentMethods');
const partners = require('./routes/partners');
const productCatalog = require('./data.json')
// const Catalog = require('./models/Catalog')
const catalogFilter = require('./routes/catalogFilter');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected successfully'))
  .catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./services/passport')(passport);

// Use Routes
app.use('/api/configs', globalConfigs);
app.use('/api/customers', customers);
app.use('/api/catalog', catalog);
app.use('/api/products', products);
app.use('/api/colors', colors);
app.use('/api/sizes', sizes);
app.use('/api/filters', filters);
app.use('/api/subscribers', subscribers);
app.use('/api/cart', cart);
app.use('/api/orders', orders);
app.use('/api/links', links);
app.use('/api/pages', pages);
app.use('/api/slides', slides);
app.use('/api/wishlist', wishlist);
app.use('/api/comments', comments);
app.use('/api/shipping-methods', shippingMethods);
app.use('/api/payment-methods', paymentMethods);
app.use('/api/partners', partners);
app.use('/api/catalog-filter', catalogFilter);

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));

// //Initializing catalog
// // Функция для инициализации каталога товаров в MongoDB
// const initializeProductCatalog = async () => {
//   const count = await Catalog.countDocuments(); // Проверяем, пуста ли коллекция
//   if(count === 0) { // Если пуста, добавляем данные из JSON
//     productCatalog.forEach(product => {
//       const newProduct = new Catalog(product);
//       newProduct.save();
//     });
//     console.log('Product catalog has been initialized.');
//   }
// };

// initializeProductCatalog().catch(console.error);


// // Підключення до бази даних MongoDB
// mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("Connected to MongoDB");
// });

// // Створення схеми та моделі даних
// const dataSchema = new mongoose.Schema({
//   value: String,
//   id: String
// });

// const Data = mongoose.model('Data', dataSchema);

// // Встановлення парсера для обробки даних в форматі JSON
// app.use(bodyParser.json());

// // Маршрут для збереження даних на сервері
// app.post('/saveData', (req, res) => {
//   const newData = new Data({
//     value: req.body.value,
//     id: req.body.id
//   });

//   newData.save((err, savedData) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Failed to save data');
//     } else {
//       res.status(200).send('Data saved successfully');
//     }
//   });
// });

// // Запуск сервера
// app.listen(port, () => {
//   console.log(`Server is listening at http://localhost:${port}`);
// });
