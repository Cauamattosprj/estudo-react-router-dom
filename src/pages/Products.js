import { Link } from "react-router-dom";
import products from "../data.js";

const Products = () => {
  return (
    <>
      <section className="section">
        <h2 className="font-bold text-sm m-0">Confira nossos produtos!</h2>
        <div className="grid grid-cols-2 gap-4 mt-2">
          {products.map((product) => {
            return (
              <div key={product.id} className="mb-12">
                <img
                  src={product.images || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s'}
                  alt=""
                  className="w-64 mb-4 drop-shadow-lg rounded-md"
                />
                <div className="flex flex-col">
                  {/* marca */}
                  <p className="m-0">
                  🔷 {product.brand}
                  </p>
                  <p className="font-bold m-0 max-w-64 truncate ">
                    Produto {product.name}
                  </p>
                  <p className="w-full text-sm mb-2">{product.description}</p>
                  <p>R${product.price}</p>
                  <Link
                    to={`/products/${product.id}`}
                    className="bg-blue-400 rounded-md p-4 font-bold text-white w-3/6 text-center"
                  >
                    Gostei
                  </Link>
                </div>
              </div>
            );
          })}

          {/* <div>
            <img src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg" alt="" className="w-64 mb-4 drop-shadow-lg rounded-md"/>
            <div className="flex flex-col">
              <p className="font-bold m-0">Produto 1</p>
              <p>Legenda do produto...</p>
              <Link to='/products/:id' className="bg-blue-400 rounded-md p-4 font-bold text-white w-3/6 text-center">Gostei</Link>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Products;
