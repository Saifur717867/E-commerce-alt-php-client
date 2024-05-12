import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import AllProductShow from "../Pages/AllProductShow/AllProductShow";
import ProductsDetails from "../Pages/Products-Details/ProductsDetails";
import OrderNow from "../Pages/Order/OrderNow";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/allProducts",
                element: <AllProductShow></AllProductShow>,
            },
            {
                path: "/allProducts/:id",
                element: <ProductsDetails></ProductsDetails>,
                loader: ({ params }) => fetch(`https://fakestoreapi.com/products/${params.id}`)
            },
            {
                path: "/order",
                element: <OrderNow></OrderNow>
            }
        ]
    },
]);