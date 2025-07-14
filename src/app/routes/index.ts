import express from "express";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { ServiceRoute } from "../modules/Service/service.route";
import { blogRoutes } from "../modules/Blog/blog.route";
import { ForgetPasswordRoute } from "../modules/ForgetPassword/forgetPassword.route";
import { adminRoutes } from "../modules/Admin/admin.route";
import { PortfolioRoute } from "../modules/Portfolio/portfolio.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/service",
    route: ServiceRoute,
  },
  {
    path: "/portfolio",
    route: PortfolioRoute,
  },

  {
    path: "/blog",
    route: blogRoutes,
  },

  {
    path: "/auth",
    route: adminRoutes,
  },

  {
    path: "/login",
    route: AuthRoutes,
  },

  {
    path: "/forget-password",
    route: ForgetPasswordRoute,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
