// search.js

const express = require("express");
const router = express.Router();
const Catalog = require("../models/Catalog");

router.get('/', async (req, res) => {
	const { name } = req.query; // Отримання параметра запиту з іменем "name"
	try {
	  // Виконайте пошук у базі даних за значенням 'name'
	  // Наприклад, ви можете використовувати це значення для пошуку в каталозі продуктів
	  const results = await Catalog.find({ name: { $regex: new RegExp(name, 'i') } });
	  res.json(results);
	} catch (error) {
	  console.error('Помилка пошуку:', error);
	  res.status(500).json({ message: 'Помилка сервера при обробці запиту' });
	}
  });
  
  module.exports = router;