import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Allproduct from "../pages/allProduct";
import Productdetail from "../pages/productDetail";
import Productcategory from "../pages/productCategory";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="" element={<Allproduct />} />
      <Route path='product/:id' element={<Productdetail />} />
      <Route path='product/:id/:category' element={<Productcategory />} />
    </Route>
  )
);

export const Routing = () => {
  return <RouterProvider router={router} />;
};
