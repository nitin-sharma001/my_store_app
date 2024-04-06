const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
let Server = new express();

Server.use(cors());
Server.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/mystore")
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB not connected", err));
const EmpSchema = mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  color: String,
  size: String,
  desc: String,
  image: String,
});

const Products = mongoose.model("products", EmpSchema);

Server.listen(9000, () => {
  console.log("Server is running");
});

Server.post("/addproducts", async (request, response) => {
  const { id, name, price, color, size, desc, image } = request.body;
  let query = new Products({
    id: id,
    name: name,
    price: price,
    color: color,
    size: size,
    desc: desc,
    image: image,
  });

  await query.save();

  response.send("Product Added");
});

Server.get("/getproducts", async (request, response) => {
  let result = await Products.find({});
  response.send(result);
});
