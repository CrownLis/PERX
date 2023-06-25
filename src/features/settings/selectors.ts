import { RootState } from "@/app/store"
import { createSelector } from "@reduxjs/toolkit"

export const selectSettings = (state: RootState) => state.settings

export const selectDealers = createSelector(
  selectSettings,
  (settings) => settings.dealers,
)
