import React from "react"
import { HashRouter, Route, Routes } from "react-router-dom"

import { ROUTES } from "@/constants/routes"
import { Basket, List } from "@/pages"
import { MainLayout } from "@/layout"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path={ROUTES.ROOT} element={<MainLayout />}>
          <Route index element={<List />} />
          <Route path={ROUTES.BASKET} element={<Basket />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
