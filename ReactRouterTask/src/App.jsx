import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./components/SeventhProject/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import ProductDetail from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
    path:"/",
    element:<RootLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/product",
        element:<About/>
      },
      {
        path:"/product/:id",
        element:<ProductDetail/>
      }
    ]
  }
])

function App() {
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}
export default App;
