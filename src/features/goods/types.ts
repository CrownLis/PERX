export type Goods = {
  readonly id: string;
  name: string;
  price: number;
  image: string;
};

export type GoodsParams = {
  dealers?: string[];
};
