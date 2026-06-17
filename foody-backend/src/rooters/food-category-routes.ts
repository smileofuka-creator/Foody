import { Hono } from "hono";
import { createFoodCategory, deleteFoodCategory, getFoodCategories, putFoodCategory } from "../controllers/food-category-controller.js";

const foodCategoryRoute = new Hono();

foodCategoryRoute.post("/", createFoodCategory)
foodCategoryRoute.get("/", getFoodCategories)
foodCategoryRoute.delete("/:id", deleteFoodCategory)
foodCategoryRoute.put("/:id", putFoodCategory)


export default foodCategoryRoute