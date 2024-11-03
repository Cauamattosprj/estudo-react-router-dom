import { useParams, Link } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id == productId);
  const productInfo = product;

  return (
    <section className="section product mx-auto my-auto">
      <div className="size-96 border-2 border-[#ebebeb] mb-4">
        <img src={product.images} alt={products.name} className="size-96" />
      </div>

      <span>{productInfo.brand}</span>
      <h2>{productInfo.name}</h2>
      <p className="font-bold">R${productInfo.price}</p>
      <p className="w-96">{productInfo.description}</p>
      <Link to="/products" className="btn">
        Back to Products
      </Link>
    </section>
  );
};

export default SingleProduct;
