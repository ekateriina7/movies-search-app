import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import Movies from "../pages/Movies/Movies";
import Movie from "../pages/Movie";
import Account from "../pages/Account";
import Favorites from "../pages/Favorites";
//import Error from "../pages/Error";

export const allRoutes = [
  { path: "/movie/:id", component: Movie, isPrivate: true },
  { path: "/movies", component: Movies, isPrivate: true },
  { path: "/account", component: Account, isPrivate: true },
  { path: "/favorites", component: Favorites, isPrivate: true },
  //{ path: "/error", component: Error },
  { path: "/login", component: LogIn },
  { path: "/signup", component: SignUp },
];
