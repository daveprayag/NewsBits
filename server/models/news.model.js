const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    title: { type: String },
    category: { type: String },
    publishDate: { type: Date },
    description: { type: String },
    image: { type: String },
    link: { type: String },
  },
  { collection: "news-data" }
);

const model = mongoose.model("News", newsSchema);

module.exports = model;
