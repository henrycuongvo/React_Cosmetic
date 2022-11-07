import "./App.css";
import "slick-carousel/slick/slick.css";
import "antd/dist/antd.min.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
function App() {
  return (
    <>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Routes>
      </div>
    </>
  );
}

export default App;
