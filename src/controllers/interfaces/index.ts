export interface IItemsController {
  getItem(): Promise<any>;
  createItem(
    id: number,
    name: string,
    sizes: any[],
    category: string,
    price: number,
    quantity: number,
    imageSrc: string
  ): Promise<any>;
}