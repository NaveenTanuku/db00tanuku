const mongoose = require("mongoose")
const ballSchema = mongoose.Schema({
type: String,
Quantity: String,
Shape: Number
})
module.exports = mongoose.model("ball", ballSchema)