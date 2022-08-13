import { IItemsController } from "./interfaces";
import { BodyProp, Get, Post, Route } from 'tsoa';

/**
 * Items Controller
 */
@Route('/')
export class ItemsController implements IItemsController {
  @Get('/')
  getItem(): Promise<any> {
    throw new Error("Method not implemented.");
  }

  @Post('/')
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