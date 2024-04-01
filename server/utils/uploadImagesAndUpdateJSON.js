const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Предполагается, что cloudinary уже настроен с вашими API ключами
cloudinary.config({
  cloud_name: 'dbwhmfiex',
  api_key: '544568566761878',
  api_secret: 'ivPqJt3JBwJocloseWBsl_S0suQ'
});

const uploadImageToCloudinary = async (imagePath) => {
  try {
    let result = await cloudinary.uploader.upload(imagePath);
    return result.secure_url; // Возвращает URL загруженного изображения
  } catch (err) {
    console.error('Ошибка при загрузке изображения на Cloudinary:', err);
    return null;
  }
};

const updateJSONWithImageURLs = async (jsonFilePath, imagesFolder) => {
  let jsonData = require(jsonFilePath);
  for (let item of jsonData) {
    if (item.logo_img) {
      const imagePath = path.join(imagesFolder, item.logo_img);
      const imageUrl = await uploadImageToCloudinary(imagePath);
      if (imageUrl) {
        item.logo_img = imageUrl; // Обновляем JSON с URL Cloudinary
      }
    }
  }
  // Здесь можно сохранить обновленный JSON в базе данных или в файл
  fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2), 'utf-8');
};

// Пример использования
const jsonFilePath = '../data.json';
const imagesFolder = '../../public';
updateJSONWithImageURLs(jsonFilePath, imagesFolder).catch(console.error);
