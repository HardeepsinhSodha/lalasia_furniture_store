import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Outlet  } from 'react-router-dom'


import Loader from './components/ui-elements/loader/Loader';
const Footer = lazy(()=>import("./components/footer/Footer"))
const Home = lazy(()=>import("./components/home/Home"))
const PageNotFound = lazy(()=>import("./components/page-not-found/PageNotFound"))
const AboutUs = lazy(()=> import("./components/about-us/AboutUs"))
const Product = lazy(()=> import("./components/product/Product"))
const ProductDetails = lazy(()=> import("./components/product/ProductDetails"))
const Services = lazy(()=> import("./components/services/Services"))
const Article = lazy(()=> import("./components/article/Article"))
const ArticleDetails = lazy(()=> import('./components/article/ArticleDetails'))
const Header = lazy(()=> import("./components/header/Header"))

const PrivateRoute = () => {
  return <><Header/> <Outlet /> <Footer/></>;
};

function App() {

  return (
    <BrowserRouter basename={process.env.REACT_APP_BASENAME ?? ""}>
        <Suspense
            fallback={<Loader/>}
          >
          <Routes>
            <Route path="/" element={<PrivateRoute />}>
              <Route index element={<Home />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route path="product" element={<Product />} />
              <Route path="product/:id" element={<ProductDetails />} />
              <Route path="services" element={<Services />} />
              <Route path="article" element={<Article />} />
              <Route path="article/:id" element={<ArticleDetails />} />
            </Route>
            <Route path='*' element={<PageNotFound/>}/>
          </Routes>
        </Suspense>
    </BrowserRouter>
  );
}

export default App;
