const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GlobalConfigSchema = new Schema(
  {
    customId: {
      type: String,
      required: true
    },
  },
  { strict: false }
);

module.exports = GlobalConfig = mongoose.model(
  "global-configs",
  GlobalConfigSchema,
  "global-configs"
);
