import {Hono} from "hono";
import { createFood, deleteFood, getFood, putFood } from "../controllers/food-controller.js";
const foodRoute = new Hono();

foodRoute.post("/", createFood)
foodRoute.get("/", getFood)
foodRoute.delete("/:id", deleteFood)
foodRoute.put("/:id",putFood)


export default foodRoute