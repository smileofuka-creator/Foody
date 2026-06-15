import { Hono } from "hono";
import { connectDb } from "./lib/connectDb.js";
import { Schema, model } from "mongoose";

const FoodCategorySchema = new Schema({
  categoryName: {
    type: String,
    required: true,
  },
});

const FoodCategoryModel = model("foodCategory", FoodCategorySchema);

const app = new Hono();

const welcomeStrings = [
  "Hello Hono!",
  "To learn more about Hono on Vercel, visit https://vercel.com/docs/frameworks/backend/hono",
];

// Food category nemdeg huselt

app.post("/category", async (c) => {
  await connectDb(); // DB TEI HOLBOGDOH FUNCTIONOO DUUDAJ AJILUULNA
  const input = await c.req.json(); // GADNAAS USERIIN BICHIJ UGSUN UTGIIG AVNA

  await FoodCategoryModel.create({
    // DB RUUGEE CATEGORY NEMJ BGA HESEG
    categoryName: input.categoryName,
  });

  return c.json({
    // HUSELTEND (request) HARIU BUTSAAJ BGA HESEG (response
    message: "Successfully created food category",
  });
});

app.get("/category", async (c) => {
  await connectDb();

  const foodCategories = await FoodCategoryModel.find();

  return c.json({
    message: "Categorygoo av",
    foodCategories,
  });
});

export default app;