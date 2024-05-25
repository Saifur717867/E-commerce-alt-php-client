import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import AllProductShow from "../Pages/AllProductShow/AllProductShow";
import ProductsDetails from "../Pages/Products-Details/ProductsDetails";
import OrderNow from "../Pages/Order/OrderNow";
import DashboardLayOut from "../LayOut/DashboardLayOut";
import Dashboard from "../Dashboard/Dashboard-pages/Dashboard";
import AddProducts from "../AddProducts/AddProducts";
import AddStore from "../AddStore/AddStore";
import AddCourier from "../AddCourier/AddCourier";
import AddOrder from "../AddOrder/AddOrder";
import AddNewOrder from "../AddOrder/AddNewOrder";
import Invoiced from "../Invoice/Invoiced";
import Delivered from "../Delivered/Delivered";
import User from "../User/User";
import ReportAll from "../Report/ReportAll";
import PrivateRouter from "./PrivateRouter";
import LogIn from './../Dashboard/Login/LogIn';
import SignUp from "../Dashboard/SignUp/SignUp";



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
            },

            {
                path: 'signUp',
                element: <SignUp></SignUp>
            },
            {
                path: 'login',
                element: <LogIn></LogIn>
            }
        ]
    },
    {
        path: "dashboard",
        element: <DashboardLayOut></DashboardLayOut>,
        children: [
            {
                path: "admin",
                element: <Dashboard></Dashboard>
            },
            {
                path: "product",
                element: <AddProducts></AddProducts>
            },
            {
                path: "store",
                element: <AddStore></AddStore>
            },
            {
                path: "courier",
                element: <AddCourier></AddCourier>
            },
            {
                path: "addOrder",
                element: <AddOrder></AddOrder>
            },
            {
                path: "addOrder/createOrder",
                element: <AddNewOrder></AddNewOrder>
            },
            {
                path: "invoiced",
                element: <Invoiced></Invoiced>
            },
            {
                path: "invoiced/createOrder",
                element: <AddNewOrder></AddNewOrder>
            },
            {
                path: "delivered",
                element: <Delivered></Delivered>
            },
            {
                path: "delivered/createOrder",
                element: <AddNewOrder></AddNewOrder>
            },
            {
                path: "user",
                element: <User></User>
            },
            {
                path: "user/createOrder",
                element: <AddNewOrder></AddNewOrder>
            },
            {
                path: "report",
                element: <ReportAll></ReportAll>
            },
        ]
    }
]);