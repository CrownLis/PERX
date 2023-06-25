import React from "react"
import { Provider } from "react-redux"
import ReactDOM from "react-dom/client"
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"

import AppComponent from "@/App"
import { initStore } from "@/app/store"
import { IApp, Settings } from "@/types/app"

import "antd/dist/reset.css"

class App implements IApp {
  rootId: string

  constructor(rootId = "app-root") {
    this.rootId = rootId
  }

  start(settings: Settings) {
    const element = document.getElementById(this.rootId)
    if (!element) {
      throw new Error("Не найден элемент необходимый для отрисовки приложения")
    }

    const root = ReactDOM.createRoot(element)

    const store = initStore({
      settings,
    })

    const persistor = persistStore(store)

    root.render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppComponent />
        </PersistGate>
      </Provider>,
    )
  }
}

window.App = App
