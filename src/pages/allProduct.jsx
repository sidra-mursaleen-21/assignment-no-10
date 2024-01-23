import data from "../data";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Allproduct() {
  const [productData, setProductData] = useState([...data]);

  const navigation = useNavigate();

  const navigate = (productId) => {
    navigation(`product/${productId}`);
  };

  return (
    <>
      <div className="products">
        {productData.map((object, index) => {
          return (
            <div key={index} className="productContainer">
              <div className="imageContainer">
                <img
                  onClick={() => navigate(object.id)}
                  width={"80%"}
                  height={"100%"}
                  src={object.image}
                  alt="product"
                  
                />
              </div>
              <div className="contentContainer">
                <h3 onClick={() => navigate(object.id)} >{object.title}</h3>
                <h2>price : {object.price}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
