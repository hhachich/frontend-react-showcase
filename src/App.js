import './App.css';
import PageNotFound from './components/pages/PageNotFound';
import ProductDetail from './components/product/ProductDetail';
import ProductList from './components/product/ProductList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <h1>SHOWCASE APP</h1>
      <Router>

        <Routes>

          <Route exact path="/" element={<ProductList />} />

          <Route exact path="/products" element={<ProductList />} />

          <Route exact path="/pd/:id" element={<ProductDetail />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
