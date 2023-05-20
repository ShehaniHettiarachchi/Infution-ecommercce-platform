import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addToCart } from "../slices/cartSlice";
import { useGetAllProductsQuery } from "../slices/productsApi";
import HomeNavBar from "./HomeNavBar";
import Footer from "./Footer";
import Cards from "./Cards";

const Home = () => {
  const { items: product, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetAllProductsQuery();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <div className="back">
      <HomeNavBar />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
