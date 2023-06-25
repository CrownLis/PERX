import { createAction } from "@reduxjs/toolkit"

import { Goods } from "@/features/goods/types"

export const addToBasket = createAction<Goods>("basket/addToBasket")

export const changeInBasket = createAction<{
  goodsId: Goods["id"]
  count: number
}>("basket/changeInBasket")

export const removeFromBasket = createAction<Goods["id"]>(
  "basket/removeFromBasket",
)

export const removeAllBasket = createAction("basket/removeAllBasket")
