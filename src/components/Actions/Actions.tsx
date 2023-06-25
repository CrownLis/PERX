import React from "react"
import { Row, Col, Button, InputNumber } from "antd"
import { useDispatch } from "react-redux"

import { Goods } from "@/features/goods/types"
import { useAppSelector } from "@/app/hooks"
import { selectBasketItemById } from "@/features/basket/selectors"
import {
  addToBasket,
  changeInBasket,
  removeFromBasket,
} from "@/features/basket/actions"

import styles from "./Actions.module.scss"
import { DeleteOutlined } from "@ant-design/icons"

type ActionsProps = {
  goods: Goods
}

export function Actions({ goods }: ActionsProps) {
  const dispatch = useDispatch()

  const goodsId = goods.id

  const basketItem = useAppSelector((state) =>
    selectBasketItemById(state, { goodsId }),
  )

  const handleAddToBasket = () => {
    dispatch(addToBasket(goods))
  }

  const handleRemoveFromBasket = () => {
    dispatch(removeFromBasket(goods.id))
  }

  const handleChangeInBasket = (count: number | null) => {
    dispatch(changeInBasket({ goodsId: goods.id, count: count || 0 }))
  }

  return (
    <Row wrap={false} justify="center" align="middle" gutter={[12, 4]}>
      {basketItem ? (
        <>
          <Col>
            <Row gutter={5}>
              <Col>
                <InputNumber
                  min={0}
                  value={basketItem.count}
                  className={styles.count}
                  onChange={handleChangeInBasket}
                />
              </Col>
              <Col>
                <Button
                  type="text"
                  onClick={handleRemoveFromBasket}
                  className={styles.button}
                >
                  <DeleteOutlined />
                </Button>
              </Col>
            </Row>
          </Col>
        </>
      ) : (
        <Col flex="none">
          <Button onClick={handleAddToBasket} className={styles.button}>
            Добавить в корзину
          </Button>
        </Col>
      )}
    </Row>
  )
}
