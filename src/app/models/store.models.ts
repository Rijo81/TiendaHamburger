
export namespace ModelsStore{
  export interface ItemI {
    id?: string;
    name: string;
    description: string;
    price: number;
    simbolDinero: string;
    image?: string;
    stock: number;
  }
  export interface PedidoI {}
  export interface CarritoI {
    total: number;
    cantidadTotal: number;
    items: {
      item: ItemI;
      cant: number;
    }[];
  }
}
