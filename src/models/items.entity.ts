import mongoose from "mongoose";

interface ItemsSchema {
  id: number,
  name: string,
  size: Array<any>,
  category: string,
  price: number,
  quantity: number,
  imageSrc: string
}

const itemsSchema = new mongoose.Schema<ItemsSchema>({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  size: { type: [], required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  imageSrc: { type: String, required: true }
})

const Items = mongoose.model('Items', itemsSchema);

export default Items;