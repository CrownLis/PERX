import { createSlice } from "@reduxjs/toolkit"

import { SettingsState } from "./types"

const initialState: SettingsState = {
  dealers: [],
}

export const settingSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {},
})

export default settingSlice.reducer
