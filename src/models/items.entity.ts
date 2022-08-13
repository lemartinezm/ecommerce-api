import mongoose from "mongoose";

export enum SIZE_ENUM {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL"
}

export interface ItemsSchema {
  id: number,
  name: string,
  sizes: Array<SIZE_ENUM>,
  category: string,
  price: number,
  quantity: number,
  imageSrc: string
}

const itemsSchema = new mongoose.Schema<ItemsSchema>({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  sizes: { type: [String], enum: [SIZE_ENUM.S, SIZE_ENUM.M, SIZE_ENUM.L, SIZE_ENUM.XL], required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  imageSrc: { type: String, required: true }
})

const Items = mongoose.model('Items', itemsSchema);

export default Items;