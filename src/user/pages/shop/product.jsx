//import React, { useContext } from "react";
import React, { useState, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";
import axios from "axios";

export const Product = () => {
  const [sanpham, setSanpham] = useState([]);
  useEffect(() => {
    getSanpham();
  }, []);

  const getSanpham = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}sanpham`);
    setSanpham(response.data);
  };

  // const { id, productName, price, productImage } = props.data;
  // const { addToCart, cartItems } = useContext(ShopContext);

  //const cartItemCount = cartItems[id];

  return <>
  {
    sanpham.map((item)=> (
    <div className="product">
      
      <img src={item.url  } />
      <div className="description">
        <p>
          <b>{item.ten}</b>
        </p>
        <p> ${item.gia}</p>
      </div>
      
      {/* <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button> */}

    </div>
  ) )

  }

  
  
  </>
    







    
};
