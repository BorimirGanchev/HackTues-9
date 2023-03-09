const mongoose = require("mongoose");

const PolyScheme = mongoose.Schema({
  coordinates: {
    type: Array,
    required: [true, "must provide coordinates"],
  },
});

module.exports = mongoose.model("Poly", PolyScheme);
