import {AlertColor} from '@mui/material/Alert'
import {createSlice} from '@reduxjs/toolkit'

export interface InitialState {
	isOpen: boolean
	message: string
	severity?: AlertColor
}

const initialState: InitialState = {
	isOpen: false,
	message: '',
	severity: undefined,
}

export const notificationSlice = createSlice({
	name: 'notification',
	initialState,
	reducers: {
		setSuccessNotification: (state, action) => {
			state.isOpen = true
			state.message = action.payload
			state.severity = 'success'
		},
		setWarningNotification: (state, action) => {
			state.isOpen = true
			state.message = action.payload
			state.severity = 'warning'
		},
		setErrorNotification: (state, action) => {
			state.isOpen = true
			state.message = action.payload
			state.severity = 'error'
		},
		setInfoNotification: (state, action) => {
			state.isOpen = true
			state.message = action.payload
			state.severity = 'info'
		},
		closeNotification: state => {
			state.isOpen = false
			state.message = ''
		},
	},
})

export const {
	setSuccessNotification,
	setWarningNotification,
	setInfoNotification,
	setErrorNotification,
	closeNotification,
} = notificationSlice.actions

export default notificationSlice.reducer
