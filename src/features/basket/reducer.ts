import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { BasketItem } from './types';
import {
  addToBasket,
  changeInBasket,
  removeAllBasket,
  removeFromBasket,
} from './actions';

export const basketAdapter = createEntityAdapter<BasketItem>({
  selectId: basket => basket.goods.id,
});

export const basketSlice = createSlice({
  name: 'basket',
  initialState: basketAdapter.getInitialState(),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(addToBasket, (state, action) => {
      const goods = action.payload;

      const basketItem = basketAdapter.getSelectors().selectById(state, goods.id);

      basketAdapter.setOne(state, {
        count: !basketItem ? 1 : basketItem.count + 1,
        goods,
      });
    });
    builder.addCase(changeInBasket, (state, action) => {
      const { goodsId, count } = action.payload;

      if (!count) {
        basketAdapter.removeOne(state, goodsId);
      } else {
        const basketItem = basketAdapter.getSelectors().selectById(state, goodsId);
        if (basketItem) {
          basketAdapter.setOne(state, {
            ...basketItem,
            count,
          });
        }
      }
    });
    builder.addCase(removeFromBasket, (state, action) => {
      const goodsId = action.payload;

      basketAdapter.removeOne(state, goodsId);
    });
    builder.addCase(removeAllBasket, state => {
      basketAdapter.removeAll(state);
    });
  },
});

export default basketSlice.reducer;
