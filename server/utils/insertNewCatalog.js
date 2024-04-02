const Catalog = require('../models/Catalog')
const productCatalogFile = require('./data.json')

const initializeProductCatalog = async () => {
  try {
    await Catalog.deleteMany({});

    await Catalog.insertMany(productCatalogFile);

    console.log('Product catalog has been initialized.');
  } catch (error) {
    console.error('Error occurred while initializing product catalog:', error);
  }
};

initializeProductCatalog();


