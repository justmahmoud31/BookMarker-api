const mongoose = require("mongoose");
const LinksSchema = mongoose.Schema(
  {
    Linkname: {
      type: String,
      required: [true, "Please Enter a Name"],
    },
    LinkUrl: {
      type: String,
      required: [true, "Please Enter a valid URL"],
    },
    description: {
      type: String,
    },
  },
  {
    Timestemps: true,
  }
);
const Link = mongoose.model("Link", LinksSchema);
module.exports = Link;
