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
                element: <Dashboard></Dashboard>
            },
            {
                path: "order",
                element: <Dashboard></Dashboard>
            },
            {
                path: "invoiced",
                element: <Dashboard></Dashboard>
            },
            {
                path: "delivered",
                element: <Dashboard></Dashboard>
            },
            {
                path: "user",
                element: <Dashboard></Dashboard>
            },
            {
                path: "report",
                element: <Dashboard></Dashboard>
            },
        ]
    }
]);