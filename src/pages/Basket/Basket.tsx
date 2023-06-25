import React from "react"
import { Button, Col, Image, Row, Typography } from "antd"
import Table, { ColumnsType } from "antd/es/table"

import { useAppDispatch, useAppSelector } from "@/app/hooks"
import {
  selectBasketAmount,
  selectBasketItems,
} from "@/features/basket/selectors"
import { BasketItem } from "@/features/basket/types"
import { removeAllBasket } from "@/features/basket/actions"
import { Actions } from "@/components"

import styles from "./Basket.module.scss"

const columns: ColumnsType<BasketItem> = [
  {
    title: "",
    dataIndex: "image",
    width: 120,
    render: (_, { goods }) => (
      <Image
        alt={goods.name}
        src={`${process.env.BASE_URL}${goods.image}`}
        className={styles.image}
      />
    ),
  },
  {
    title: "Название",
    dataIndex: "name",
    width: 240,
    render: (_, { goods }) => <Typography.Text>{goods.name}</Typography.Text>,
  },
  {
    title: "Цена",
    dataIndex: "price",
    width: 120,
    render: (_, { goods }) => (
      <Typography.Text>{goods.price} ₽</Typography.Text>
    ),
  },
  {
    title: "",
    fixed: "right",
    width: 240,
    render: (_, { goods }) => <Actions goods={goods} />,
  },
]

export function Basket() {
  const dispatch = useAppDispatch()

  const basketItems = useAppSelector(selectBasketItems)
  const basketAmount = useAppSelector(selectBasketAmount)

  const handleRemoveBasket = () => {
    dispatch(removeAllBasket())
  }

  return (
    <Row gutter={[24, 24]} justify="end" align="middle">
      <Col flex="auto">
        <Button onClick={handleRemoveBasket}>Очистить корзину</Button>
      </Col>
      <Col span={24}>
        <Table
          rowKey={(item) => item.goods.id}
          columns={columns}
          dataSource={basketItems}
          pagination={false}
          scroll={{ x: 576 }}
        />
      </Col>
      <Col flex="none">
        <Typography.Text strong>Итого: {basketAmount} ₽</Typography.Text>
      </Col>
    </Row>
  )
}
