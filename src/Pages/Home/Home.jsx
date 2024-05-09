
import Products from "../Products/Products";
import PaymentImage from "./PaymentImage";
import Slider from "./Slider";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Products></Products>
            <PaymentImage></PaymentImage>
        </div>
    );
};

export default Home;