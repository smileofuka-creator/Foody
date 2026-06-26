import { Schema, model } from "mongoose";

const FoodSchema = new Schema(
  {
    foodName: String,
    price: Number,
    ingredients: String,
    image: String,
    category: {
      type: Schema.Types.ObjectId,
      ref: "foodCategory",
    },
  },
  {
    timestamps: true,
  },
);

export const FoodModel = model("Food", FoodSchema);
