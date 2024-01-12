

import Settings from "../pages/Settings";
import Accounts from "../pages/Accounts";
import HomePage from "../pages/Home";

const routes = [
  {
    path: "/",
    name: "Home",
    exact: true,
  },
  {
    path: "/home",
    name: "Dashboard",
    element: HomePage
  },
  {
    path: "/news",
    name: "News",
    element: HomePage
  },
  {
    path: "/blogs",
    name: "Blogs",
    element: HomePage
  },
  {
    path: "/search",
    name: "Search",
    element: HomePage
  },
  {
    path: "/account",
    name: "Account",
    element: HomePage
  },
  {
    path: "/settings",
    name: "Settings",
    element: Settings
  },
  {
    path: "/accounts",
    name: "Accounts",
    element: Accounts
  }
];

export default routes;
