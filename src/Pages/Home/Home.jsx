
import CaroselSlider from "../../Components/CaroselSlider";
import Products from "../Products/Products";
import PaymentImage from "./PaymentImage";
import Slider from "./Slider";


const Home = () => {
    return (
        <div>
            {/* <Slider></Slider> */}
            <CaroselSlider></CaroselSlider>
            <Products></Products>
            <PaymentImage></PaymentImage>
        </div>
    );
};

export default Home;