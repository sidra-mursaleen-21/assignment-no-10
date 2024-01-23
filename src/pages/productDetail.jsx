import { Navigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data";

export default function Productdetail() {
  const [productData, setProductData] = useState([...data]);

  const parameter = useParams();

  const navigation = useNavigate();

  const navigateToCategory = (category) => {
    navigation(`${category}`);
  };

  const filteredArray = productData.filter((product) => {
    return parameter.id == product.id;
  });

  return (
    <>
      <div className="productDetail">
        <div className="productImage">
          <img
            width={"100%"}
            height={"100%"}
            src={filteredArray[0].image}
            alt="product"
          />
        </div>
        <div className="productContent">
          <h1>{filteredArray[0].title}</h1>
          <p>{filteredArray[0].description}</p>
          <h2>price : {filteredArray[0].price}</h2>
          <h3>
            category:
            <span onClick={() => navigateToCategory(filteredArray[0].category)}>
              {filteredArray[0].category}
            </span>
          </h3>
          <button>add to cart</button>
        </div>
      </div>
    </>
  );
}
