import { Hono } from "hono";
import { cors } from "hono/cors";
import foodCategoryRoute from "./rooters/food-category-routes.js";
import foodRoute from "./rooters/food.route.js";
import userRoute from "./rooters/user.route.js";

const app = new Hono();
app.use("/*", cors());

app.route("/category", foodCategoryRoute);
app.route("/food", foodRoute);
app.route("/user", userRoute);

export default app;
