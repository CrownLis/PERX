import React from "react"
import { Row, Col, Spin } from "antd"

import { useAppSelector } from "@/app/hooks"
import { useGetGoodsQuery } from "@/features/goods/reducer"
import { selectDealers } from "@/features/settings/selectors"
import { Card } from "@/components"

import styles from "./List.module.scss"

export function List() {
  const dealers = useAppSelector(selectDealers)

  const { data: goods, isLoading } = useGetGoodsQuery({ dealers })

  if (isLoading) {
    return <Spin size="large" className={styles.spin} />
  }

  return (
    <Row wrap gutter={[12, 12]}>
      {goods?.map((good) => {
        return (
          <Col key={good.id} xs={24} sm={12} md={8} lg={8} xl={6} xxl={6}>
            <Card goods={good} />
          </Col>
        )
      })}
    </Row>
  )
}
