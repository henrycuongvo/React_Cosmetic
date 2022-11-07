import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import SellingProducts from "../pages/Home/SellingProducts";
import SuggestedProducts from "../pages/Home/SuggestedProducts";
import Login from "../layouts/Login";
import Register from "../layouts/Register";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/products", component: Products },
  { path: "/productdetail", component: ProductDetail },
  { path: "/sellingproducts", component: SellingProducts },
  { path: "/suggestedproducts", component: SuggestedProducts },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
