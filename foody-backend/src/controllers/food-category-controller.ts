import { Context } from "hono";
import { connectDb } from "../lib/connectDb.js";
import { FoodCategoryModel } from "../model/food-category.model.js";


//CREATE FOOD CONTROLLER FUNCTION

export const createFoodCategory = async (c: Context) => {
      await connectDb(); // DB TEI HOLBOGDOH FUNCTIONOO DUUDAJ AJILUULNA
      const input = await c.req.json(); // GADNAAS USERIIN BICHIJ UGSUN UTGIIG AVNA
    
      await FoodCategoryModel.create({
        // DB RUUGEE CATEGORY NEMJ BGA HESEG
        categoryName: input.categoryName
      });
    
      return c.json({
        // HUSELTEND (request) HARIU BUTSAAJ BGA HESEG (response
        message: "Successfully created food category",
      });
}
//GET FOOD CONTROLLER FUNCTION
export const getFoodCategories = async (c: Context) => {
      await connectDb();

  const foodCategories = await FoodCategoryModel.find();

  return c.json({
    message: "Categorygoo av",
    foodCategories,
  });
}

// GET FOOD CONTROLLER FUNCTION

export const deleteFoodCategory = async (c:Context) =>{
      await connectDb(); 
  const id = c.req.param("id"); 

  const response = await FoodCategoryModel.findByIdAndDelete(id); 

  return c.json({
   
    message: "Successfully deleted food category",response,
  });
}

//GET FOOD CONTROLLER FUNCTION

export const putFoodCategory = async (c: Context) => {
     await connectDb(); 
  const id = c.req.param("id"); 
  const input = await c.req.json(); 


  const response = await FoodCategoryModel.findByIdAndUpdate(id, { categoryName: input.categoryName },
    { new: true });

  return c.json({
    message: "Successfully updated food category",
    response,
  });
}