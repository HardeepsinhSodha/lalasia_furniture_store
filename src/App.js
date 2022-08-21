import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Outlet  } from 'react-router-dom'

import Footer from "./components/footer/Footer"
import Home from "./components/home/Home"
import Loader from './components/ui-elements/loader/Loader';
const AboutUs = lazy(()=> import("./components/about-us/AboutUs"))
const Product = lazy(()=> import("./components/product/Product"))
const ProductDetails = lazy(()=> import("./components/product/ProductDetails"))
const Services = lazy(()=> import("./components/services/Services"))
const Article = lazy(()=> import("./components/article/Article"))
const ArticleDetails = lazy(()=> import('./components/article/ArticleDetails'))
const Header = lazy(()=> import("./components/header/Header"))

function App() {

  return (
    <BrowserRouter basename={process.env.REACT_APP_BASENAME ?? ""}>
      <Header/>
        <Suspense
            fallback={<Loader/>}
          >
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route index element={<Home />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route path="product" element={<Product />} />
              <Route path="product/:id" element={<ProductDetails />} />
              <Route path="services" element={<Services />} />
              <Route path="article" element={<Article />} />
              <Route path="article/:id" element={<ArticleDetails />} />
            </Route>
          </Routes>
        </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
