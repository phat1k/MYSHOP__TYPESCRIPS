import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useState } from "react";
import Login from "./pages/login";
import "antd/dist/antd.css";
import { MainLayout } from "./layout/MainLayout";
import Home from "./pages/home";
import { Provider } from "react-redux";
import { store } from "./store";
import Providerr from "./components/Provider";
import Product from "./pages/product"
import { AUTH_PATH, PRODUCT_CATEGORY_PATH, PRODUCT_PATH } from "./constants/path";
import AccountLayout from "./pages/profile";
import { GlobalStateProvider } from "./hook/useGlobalState";
import { AuthenticationProvider } from "./hook/authentication";
import LoginCrud from "./pages/register";
import { Pageerror } from "./pages/error";
import { getToken } from "./utils/token";

// import Wishlist from "./pages/profile"


function App() {
  const token = getToken()
  console.log('tokentokentokentoken', token)
  const [login, setLogin] = useState(false);
  const submitLogin = () => {
    setLogin(true);
  };
  const submitLogout = () => {
    setLogin(false);
  };
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AuthenticationProvider>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path={PRODUCT_PATH} element={<Product />} />
              <Route path={PRODUCT_CATEGORY_PATH} element={<Product />} />
              {/* <Route path="/register" element={<LoginCrud />} /> */}
              
              {/* <Route path={PRODUCT_PATH} element={<Providerr> <Product /> </Providerr>} /> */}
              {/* <Route path="/profile" element={<Providerr><AccountLayout /></Providerr>}> */}
              {
                token ?
                  <Route path={PRODUCT_PATH} element={<Product />} /> :
                  <Route path="/register" element={<LoginCrud />} /> 
                }
              
              {/* </Route> */}
            </Route>
          <Route path="/404" element={<Pageerror />} />
          </Routes>

        </AuthenticationProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
