const fs = require('fs').promises;
const Catalog = require('../models/Catalog')
const productCatalogFilePath = require('../data.json')

const initializeProductCatalog = async () => {
  try {
    // Чтение данных из файла productCatalog.json
    const data = await fs.readFile(productCatalogFilePath, 'utf8');
    const productCatalog = JSON.parse(data);

    // Удаление существующих записей из коллекции
    await Catalog.deleteMany({});

    // Добавление новых данных из файла productCatalog.json
    await Catalog.insertMany(productCatalog);

    console.log('Product catalog has been initialized.');
  } catch (error) {
    console.error('Error occurred while initializing product catalog:', error);
  }
};

initializeProductCatalog();
