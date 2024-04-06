import Output from "./components/Output";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

let App = () => {
  let [row, setRow] = useState();

  let [products, setProducts] = useState([]);
  const getData = () => {
    axios.get("http://localhost:9000/getproducts").then((res) => {
      setProducts(res.data);
    });
  };

  const setData = async (row) => {
    await axios.post("http://localhost:9000/addproducts", row);
  };

  useEffect(() => {
    getData();
  }, []);

  let onImageChangeHnadler = (event) => {
    setRow({ ...row, image: event.target.value });
  };
  let onIdChangeHnadler = (event) => {
    setRow({ ...row, id: event.target.value });
  };
  let onNameChangeHnadler = (event) => {
    setRow({ ...row, name: event.target.value });
  };
  let onSizeChangeHnadler = (event) => {
    setRow({ ...row, size: event.target.value });
  };
  let onPriceChangeHnadler = (event) => {
    setRow({ ...row, price: event.target.value });
  };
  let onDescChangeHnadler = (event) => {
    setRow({ ...row, desc: event.target.value });
  };
  let onColorChangeHnadler = (event) => {
    setRow({ ...row, color: event.target.value });
  };

  let addData = () => {
    setProducts([...products, row]);
    setData(row);
  };
  return (
    <div className="container">
      <div class="shop">
        <Output products={products}></Output>
      </div>
      <div className="form">
        <h1>Add Item</h1>
        <input placeholder="Image Url" onChange={onImageChangeHnadler}></input>
        <input placeholder="Item ID" onChange={onIdChangeHnadler}></input>
        <input placeholder="Name" onChange={onNameChangeHnadler}></input>
        <input placeholder="Size" onChange={onSizeChangeHnadler}></input>
        <input placeholder="Price" onChange={onPriceChangeHnadler}></input>
        <input placeholder="Description" onChange={onDescChangeHnadler}></input>
        <input placeholder="Color" onChange={onColorChangeHnadler}></input>

        <input type="button" onClick={addData} value="Add Item"></input>
      </div>
    </div>
  );
};

export default App;
