import Home from "./Pages/home/Home";
import UsersList from "./Pages/Users/UsersList";
import NewUser from "./Pages/NewUser/NewUser";
import Products from "./Pages/products/products";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <UsersList /> },
  { path: "/newUsers", element: <NewUser /> },
  { path: "/products", element: <Products /> },

];

export default routes;
