// catalogFilter.js

const express = require("express");
const router = express.Router();
const Catalog = require("../models/Catalog");

// @route   GET /api/catalog
// @desc    GET filtered catalog
// @access  Public
router.get("/", async (req, res) => {
  try {
    const { parentId, gender, size, price, color, material, sort, } = req.query;
    let catalog = await Catalog.find(); // отримуємо весь каталог

    // Фільтрація за параметрами
	if (parentId) {
		catalog = catalog.filter(product => product.parentId === parentId);
	  }
    if (gender) {
      catalog = catalog.filter(product => product.gender === gender);
    }
    if (size) {
      catalog = catalog.filter(product => product.size.includes(size));
    }
	if (price) {
		catalog = catalog.filter(product => product.price.includes(price));
	  }
    if (color) {
      catalog = catalog.filter(product => product.color.includes(color));
    }
    if (material) {
      catalog = catalog.filter(product => product.material.includes(material));
    }

    // Сортування
    if (sort === 'low-to-high') {
      catalog.sort((a, b) => a.price - b.price);
    } else if (sort === 'high-to-low') {
      catalog.sort((a, b) => b.price - a.price);
    }

    res.json(catalog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
