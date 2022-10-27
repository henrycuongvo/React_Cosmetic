import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/products", component: Products },
  { path: "/productdetail", component: ProductDetail },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
