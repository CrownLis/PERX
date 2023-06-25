import { RootState } from "@/app/store"
import { createSelector } from "@reduxjs/toolkit"
import { basketAdapter } from "./reducer"

export const selectBasket = (state: RootState) => state.basket

export const selectBasketItemById = createSelector(
  [selectBasket, (_: RootState, { goodsId }: { goodsId: string }) => goodsId],
  (basket, goodsId) => basketAdapter.getSelectors().selectById(basket, goodsId),
)

export const selectBasketItems = createSelector(selectBasket, (basket) =>
  basketAdapter.getSelectors().selectAll(basket),
)

export const selectBasketAmount = createSelector(
  selectBasketItems,
  (basketItems) => {
    return basketItems
      .reduce((acc, basketItem) => {
        return acc + basketItem.count * basketItem.goods.price
      }, 0)
      .toFixed(2)
  },
)

export const selectBasketQuantity = createSelector(
  selectBasketItems,
  (basketItems) => {
    return basketItems.reduce((acc, basketItem) => {
      return acc + basketItem.count
    }, 0)
  },
)
