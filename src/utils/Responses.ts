import { ItemsSchema } from "../models/items.entity"

export type ItemsResponse = {
  data?: ItemsSchema[],
  message?: string
}
