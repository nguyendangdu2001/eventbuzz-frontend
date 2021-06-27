import { lazy } from "react";

const Home = lazy(() => import("@pages/Home"));
const Detail = lazy(() => import("@pages/Detail"));
const Search = lazy(() => import("@pages/Search"));
const Login = lazy(() => import("@pages/Login"));
const SignUp = lazy(() => import("@pages/SignUp"));

const UserHome = lazy(() => import("@pages/UserHome"));
const UserCalendar = lazy(() => import("@pages/UserCalendar"));
const EventMap = lazy(() => import("@pages/EventMap"));
const UserPage = lazy(() => import("@pages/UserPage"));
const Payment = lazy(() => import("@pages/Payment"));
const UserEvent = lazy(() => import("@pages/UserEvent"));
const Admin = lazy(() => import("@pages/Admin"));

const Routes = [
  { path: "/", exact: true, component: Home },
  { path: "/detail/:id", exact: true, component: Detail },
  { path: "/search", exact: true, component: Search },
  { path: "/login", exact: true, component: Login },
  { path: "/signup", exact: true, component: SignUp },

  { path: "/user-home", exact: true, component: UserHome },
  { path: "/user-calendar", exact: true, component: UserCalendar },
  { path: "/event-map", exact: true, component: EventMap },
  { path: "/user-page", exact: true, component: UserPage },
  { path: "/payment", exact: true, component: Payment },
  { path: "/user-event", exact: true, component: UserEvent },
  { path: "/admin", exact: true, component: Admin },

  // { path: "/login", exact: true, component: Login },
  // { path: "/signup", exact: true, component: SignUp },
  // {
  //   path: "/agency-dashboard",
  //   exact: true,
  //   component: AgencyDashBoard,
  //   isPrivate: true,
  //   role: [1, 2, 3, 4],
  // },
  // {
  //   path: "/getting-report",
  //   exact: true,
  //   component: GettingReport,
  //   isPrivate: true,
  //   role: [0, 1, 2, 3, 4],
  // },
  // {
  //   path: "/agency-policy",
  //   exact: true,
  //   component: AgencyPolicy,
  //   role: [0, 1, 2, 3, 4],
  // },
  // { path: "/blogs", exact: true, component: Blogs },
  // { path: "/blog/:slug", exact: true, component: BlogDetail },
  // {
  //   path: "/user",
  //   exact: false,
  //   component: UserManagement,
  //   isPrivate: true,
  //   role: [0, 1, 2, 3, 4],
  // },
];

export default Routes;
