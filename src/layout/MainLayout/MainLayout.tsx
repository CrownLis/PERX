import React from "react"
import { Layout } from "antd"
import {
  Header as AntdHeader,
  Content as AntdContent,
} from "antd/es/layout/layout"
import { Outlet } from "react-router-dom"

import { Header } from "@/components"

import styles from "./MainLayout.module.scss"

export function MainLayout() {
  return (
    <Layout className={styles.layout}>
      <AntdHeader className={styles.header}>
        <Header />
      </AntdHeader>
      <AntdContent className={styles.content}>
        <Outlet />
      </AntdContent>
    </Layout>
  )
}
