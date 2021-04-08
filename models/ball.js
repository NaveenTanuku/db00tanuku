const mongoose = require("mongoose")
const ballSchema = mongoose.Schema({
type: String,
shape: String,
quantity: Number
})
module.exports = mongoose.model("ball", ballSchema)