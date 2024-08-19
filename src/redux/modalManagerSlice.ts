import { createSlice, configureStore } from '@reduxjs/toolkit'

export const MODAL_REGISTERED = Object.freeze({
  INVOICE_FORM: 'invoiceForm'
})

const modalManagerSlice = createSlice({
  name: 'modalManager',
  initialState: {
    current: null as string | null
  },
  reducers: {
    openModal: (state, action) => {
      state.current = action.payload
    },
    closeModal: (state) => {
      state.current = null
    }
  }
})

export const { openModal, closeModal } = modalManagerSlice.actions

export const modalManagerStore = configureStore({
  reducer: modalManagerSlice.reducer
})
