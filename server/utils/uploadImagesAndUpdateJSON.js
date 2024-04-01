const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Предполагается, что cloudinary уже настроен с вашими API ключами
cloudinary.config({
  cloud_name: 'dbwhmfiex',
  api_key: '544568566761878',
  api_secret: 'ivPqJt3JBwJocloseWBsl_S0suQ'
});

// Функция для загрузки изображения на Cloudinary с сохранением архитектуры папок
const uploadImageToCloudinary = async (imagePath, baseFolder) => {
    try {
      const folderPath = path.relative(baseFolder, path.dirname(imagePath));
      let result = await cloudinary.uploader.upload(imagePath, {
        folder: folderPath.replace(/\\/g, '/') // Заменяем обратные слеши на обычные для совместимости с Cloudinary
      });
      return result.secure_url; // Возвращает URL загруженного изображения
    } catch (err) {
      console.error('Ошибка при загрузке изображения на Cloudinary:', err);
      return null;
    }
  };
  
  // Рекурсивная функция для обхода всех файлов в директории и поддиректориях
  const walkSync = (dir, filelist = []) => {
    fs.readdirSync(dir).forEach(file => {
      filelist = fs.statSync(path.join(dir, file)).isDirectory()
        ? walkSync(path.join(dir, file), filelist)
        : filelist.concat(path.join(dir, file));
    });
    return filelist;
  };
  
  // Функция для обновления JSON файла с URL-адресами Cloudinary
  const updateJSONWithImageURLs = async (jsonFilePath, baseFolder) => {
    let jsonData = require(jsonFilePath);
    const allImages = walkSync(baseFolder); // Получаем все пути к файлам изображений
  
    for (let i = 0; i < jsonData.length; i++) {
      const item = jsonData[i];
      if (item.logo_img) {
        const imagePath = path.join(baseFolder, item.logo_img);
        if (allImages.includes(imagePath)) {
          const imageUrl = await uploadImageToCloudinary(imagePath, baseFolder);
          if (imageUrl) {
            item.logo_img = imageUrl; // Обновляем JSON с URL Cloudinary
          }
        }
      }
    }
  
    // Записываем обновленный JSON обратно в файл
    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2), 'utf-8');
    console.log('JSON файл успешно обновлен с новыми URL изображений.');
  };

// Пример использования
const jsonFilePath = '../data.json';
const baseFolder  = '../../public';
updateJSONWithImageURLs(jsonFilePath, baseFolder).catch(console.error);
