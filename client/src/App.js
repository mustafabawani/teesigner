import react, { yuseState, useEffect, useState } from "react";
import './App.css';
import axios from 'axios';
function App() {
  const [product_ID, setproductId] = useState("");
  const [productName, setproductName] = useState("");
  const [discount, setdiscount] = useState("");
  const [unit_price, setunit_price] = useState("");
  const [productList, setProductList] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:3001/api/get").then((response) => {
      setProductList(response.data);
    });
  }, []);
  const submitProduct = () => {
    axios.post("http://localhost:3001/api/insert", {
      productName: productName,
      product_ID: product_ID,
      discount: discount,
      unit_price: unit_price,
    }).then(() => {
      setmovielist([...setProductList, {productName: productName,product_ID: product_ID,discount: discount,unit_price: unit_price,}]);
        });
  };
  return (
    <div className="App">
      <h1>crud application</h1>

      <div className="form">
        <label>product ID</label>
        <input type="text" name="product_id"
          onChange={(e) => {
            setproductId(e.target.value);
          }}
        />
        <label>product name</label>
        <input type="text" name="productName"
          onChange={(e) => {
            setproductName(e.target.value);
          }} />
        <label>discount</label>
        <input type="double" name="discount"
          onChange={(e) => {
            setdiscount(e.target.value);
          }} />
        <label>unit price</label>
        <input tyep="double" name="unit_price"
          onChange={(e) => {
            setunit_price(e.target.value);
          }} />
        <button onClick={submitProduct}>submit</button>
      </div>
      <div>
        {productList.map((val) => {
          return (
            <h3>product_ID: {val.product_id} || productName: {val.picture_url} || discount: {val.discount} || unit_price: {val.unit_price}</h3>
          );
        })}
      </div>
    </div>
  );
}

export default App;
