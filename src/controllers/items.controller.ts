import { IItemsController } from "./interfaces";
import { BodyProp, Example, Get, Post, Response, Route, SuccessResponse, Tags } from 'tsoa';
import { ItemsResponse } from "../utils/Responses";
import { ItemsSchema, SIZE_ENUM } from "../models/items.entity";

/**
 * Items Controller
 */
@Route('/api')
@Tags('Items Controller')
export class ItemsController implements IItemsController {
  /**
   * Endpoint to obtain all items
   */
  @Get('/')
  @SuccessResponse(200, 'Items obtained successfully')
  @Example<ItemsResponse>({
    data: [
      {
        id: 1,
        name: "Hoodie Anime",
        sizes: [SIZE_ENUM.S, SIZE_ENUM.M, SIZE_ENUM.L, SIZE_ENUM.XL],
        category: "Sudaderas",
        price: 180,
        quantity: 1,
        imageSrc:
          "https://res.cloudinary.com/daobmfotr/image/upload/v1660249137/e-commerce-x/hoddie_anime_swzi9p.webp",
      },
      {
        id: 2,
        name: "Sudadera Nike",
        sizes: [SIZE_ENUM.S, SIZE_ENUM.M, SIZE_ENUM.L, SIZE_ENUM.XL],
        category: "Sudaderas",
        price: 100,
        quantity: 1,
        imageSrc:
          "https://res.cloudinary.com/daobmfotr/image/upload/v1660249137/e-commerce-x/hoddie_anime_swzi9p.webp",
      }
    ]
  })
  @Response<ItemsResponse>(400, 'Something went wrong', {
    message: 'Something went wrong'
  })
  getItem(): Promise<any> {
    throw new Error("Method not implemented.");
  }

  /**
   * Endpoint to create item
   * @param {number} id Item ID 
   * @param {name} name Name
   * @param {Array<SIZE_ENUM>} sizes Sizes available
   * @param {string} category Category
   * @param {number} price Price
   * @param {number} quantity Quantity
   * @param {string} imageSrc Image source URL
   */
  @Post('/')
  @SuccessResponse(201, 'Item created successfully')
  @Example<ItemsSchema>({
    id: 1,
    name: "Hoodie Anime",
    sizes: [SIZE_ENUM.S, SIZE_ENUM.M, SIZE_ENUM.L, SIZE_ENUM.XL],
    category: "Sudaderas",
    price: 180,
    quantity: 1,
    imageSrc:
      "https://res.cloudinary.com/daobmfotr/image/upload/v1660249137/e-commerce-x/hoddie_anime_swzi9p.webp",
  })
  @Response<ItemsResponse>(400, 'Something went wrong', {
    message: 'Something went wrong'
  })
  createItem(
    @BodyProp('id') id: number,
    @BodyProp('name') name: string,
    @BodyProp('sizes') sizes: any[],
    @BodyProp('category') category: string,
    @BodyProp('price') price: number,
    @BodyProp('quantity') quantity: number,
    @BodyProp('imageSrc') imageSrc: string
  ): Promise<any> {
    throw new Error("Method not implemented.");
  }
}