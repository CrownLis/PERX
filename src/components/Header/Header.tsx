import React from "react"
import { Col, Row, Typography } from "antd"
import { ShoppingCartOutlined, UnorderedListOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"

import { ROUTES } from "@/constants/routes"
import { useAppSelector } from "@/app/hooks"
import {
  selectBasketQuantity,
  selectBasketAmount,
} from "@/features/basket/selectors"

import styles from "./Header.module.scss"

export function Header() {
  const basketQuantity = useAppSelector(selectBasketQuantity)
  const basketAmount = useAppSelector(selectBasketAmount)

  return (
    <Row justify="space-between" align="middle">
      <Col flex="none">
        <Link to={ROUTES.ROOT} className={styles.link}>
          <Typography.Text>
            <UnorderedListOutlined /> &nbsp; Список товаров
          </Typography.Text>
        </Link>
      </Col>
      <Col flex="none">
        <Link to={ROUTES.BASKET} className={styles.link}>
          <Typography.Text>
            <ShoppingCartOutlined />
            &nbsp;
            {!!basketAmount && <>{basketAmount} ₽</>}
            &nbsp;|&nbsp;{!!basketQuantity && <>{basketQuantity} шт.</>}
          </Typography.Text>
        </Link>
      </Col>
    </Row>
  )
}
