import './App.css';
import { BrowserRouter as Router, Routes, Route, Link  } from "react-router-dom";
import {Home} from "./Pages/Home";
import { ContactUs } from "./Pages/ContactUs"
import { About } from "./Pages/About"
import { Products } from "./Pages/Products";
import { Item } from "./Components/Item";
import { ItemsData } from "./Components/ItemsData";
import { ProductsData } from "./Components/ProductsData";

function App() {

    localStorage.setItem("Products", JSON.stringify(ProductsData));
    localStorage.setItem("Items", JSON.stringify(ItemsData));
    const productsList = JSON.parse(localStorage.getItem("Products"));

  return (
      <Router>
        <div className="menu">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                  <li><Link to="/products">Products</Link>
                  <ul className="underList">
                    {productsList.map((product) =>
                    <li key={Date.now()+product.product}>
                      <Link to={"/products/"+product.product}>{product.product}</Link>
                    </li>
                    )}
                  </ul>
                </li>
              </ul>
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contactus">Contact us</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:item" element={<Item />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/about" element={<About />} />

            </Routes>
        </div>
      </Router>
  );
}

export default App;
