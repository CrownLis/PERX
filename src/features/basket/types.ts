import { Goods } from '@/features/goods/types';

export type BasketItem = {
  goods: Goods;
  count: number;
};
