import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import data from "../data";

export default function Productcategory() {
  const [productData, setProductData] = useState([...data]);

  const parameter = useParams();
  const navigation = useNavigate();

  const navigateToProduct = (productId) => {
    navigation("/");
    navigation(`product/${productId}`);
  };

  const filteredArray = productData.filter((product) => {
    return parameter.category == product.category;
  });

  return (
    <>
      <div className="productCategory">
        {filteredArray.map((object, index) => {
          return (
            <div key={index} className="productContainer">
              <div className="imageContainer">
                <img
                  onClick={() => navigateToProduct(object.id)}
                  width={"80%"}
                  height={"100%"}
                  src={object.image}
                  alt="product"
                />
              </div>
              <div className="contentContainer">
                <h3 onClick={() => navigateToProduct(object.id)}>
                  {object.title}
                </h3>
                <h2>price : {object.price}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
