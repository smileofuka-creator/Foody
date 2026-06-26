import { Context } from "hono";
import { connectDb } from "../lib/connectDb.js";
import { FoodModel } from "../model/food-model.js";

export const createFood = async (c: Context) => {
  console.log("CREATEING FOOD");
  await connectDb();
  const input = await c.req.json();

  console.log("CREATE FOOD AJILLA", input);
  const response = await FoodModel.create({
    foodName: input.foodName,
    price: input.price,
    ingredients: input.ingredients,
    category: input.category,
    image: input.image,
  });
  return c.json({
    message: "Amjilttai hool nemlee",
    response,
  });
};

export const getFood = async (c: Context) => {
  await connectDb();
  console.log("GETTTING FOODS");

  const foodList = await FoodModel.find();

  return c.json({
    message: "food ee avna",
    foodList,
  });
};

export const deleteFood = async (c: Context) => {
  await connectDb();
  const id = c.req.param("id");
  const response = await FoodModel.findByIdAndDelete();

  return c.json({
    messege: "Amjilttai hool ustlaa",
    response,
  });
};

export const putFood = async (c: Context) => {
  await connectDb();
  const id = c.req.param("id");
  const input = await c.req.json();

  const response = await FoodModel.findByIdAndUpdate(
    id,
    { foodName: input.foodName },
    { new: true },
  );
  return c.json({
    message: "Amjilltai zasagdlaa",
    response,
  });
};
