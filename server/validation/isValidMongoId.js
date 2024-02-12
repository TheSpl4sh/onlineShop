const mongoose = require("mongoose");

const isValidMongoId = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
}

module.exports = isValidMongoId;