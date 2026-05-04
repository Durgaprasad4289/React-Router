import { data } from "../data/data";
import "./css_codes/Products.css"
import { NavLink } from "react-router-dom";
function Products() {
  return (
    <div className="page">
      <h1>Products Page</h1>
      <div className="products">
        {
          data.map((item) => (
            <div className="product" key={item.id}>
              <h3 >{item.name}</h3>
              <NavLink to={`/products/${item.id}`}>
                <button>View</button>
              </NavLink>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Products;