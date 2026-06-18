import { Hono } from "hono";
// import connectDb from './lib/connectDb.js' // removed unused import
import { Schema, model } from "mongoose";
import { cors } from "hono/cors";
import foodCategoryRoute from "./rooters/food-category-routes.js";
import { readFile } from "fs";
import foodRoute from "./rooters/food.route.js";

// const FoodCategorySchema = new Schema({
//   categoryName: {
//     type: String,
//     required: true,
//   },
// });

// const FoodCategoryModel = model("foodCategory", FoodCategorySchema);



const app = new Hono();
app.use('/*', cors());

app.route("/category", foodCategoryRoute);
app.route("/food", foodRoute );

// const getFoodCategories= async ()=> {
//     const data = await readFile (FILE_PATH, "utf-8");
//     return JSON.parse(data);
// };

// const saveFoodCategories= 


// Food category nemdeg huselt

// app.post("/category", async (c) => {
//   await connectDb(); // DB TEI HOLBOGDOH FUNCTIONOO DUUDAJ AJILUULNA
//   const input = await c.req.json(); // GADNAAS USERIIN BICHIJ UGSUN UTGIIG AVNA

//   await FoodCategoryModel.create({
//     // DB RUUGEE CATEGORY NEMJ BGA HESEG
//     categoryName: input.categoryName
//   });

//   return c.json({
//     // HUSELTEND (request) HARIU BUTSAAJ BGA HESEG (response
//     message: "Successfully created food category",
//   });
// });

// app.get("/category", async (c) => {
//   await connectDb();

//   const foodCategories = await FoodCategoryModel.find();

//   return c.json({
//     message: "Categorygoo av",
//     foodCategories,
//   });
// });

// app.put("/category/:id", async (c) => {
//   await connectDb(); 
//   const id = c.req.param("id"); 
//   const input = await c.req.json(); 


//   const response = await FoodCategoryModel.findByIdAndUpdate(id, {
    
//     categoryName: input.categoryName,
//   });

//   return c.json({
//     message: "Successfully updated food category",
//     response,
//   });
// });

// app.delete("/category/:id", async (c) => {
//   await connectDb(); 
//   const id = c.req.param("id"); 

//   const response = await FoodCategoryModel.findByIdAndDelete(id); 

//   return c.json({
   
//     message: "Successfully deleted food category",response,
//   });
// });










export default app;