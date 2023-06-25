import { basketReducer } from "@/features/basket"
import goodsReducer, { goodsApi } from "@/features/goods/reducer"
import { settingsReducer } from "@/features/settings"
import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
  PreloadedState,
} from "@reduxjs/toolkit"
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"

const rootReducer = combineReducers({
  basket: basketReducer,
  settings: settingsReducer,
  [goodsApi.reducerPath]: goodsReducer,
})

const persistedReducer = persistReducer(
  {
    key: "root",
    version: 1,
    storage,
    whitelist: ["basket"],
  },
  rootReducer,
)

export function initStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    preloadedState,
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(goodsApi.middleware),
  })
}

export type Store = ReturnType<typeof initStore>
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = Store["dispatch"]
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
