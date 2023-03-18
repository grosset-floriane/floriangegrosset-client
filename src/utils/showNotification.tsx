import {
	setSuccessNotification,
	setErrorNotification,
	setWarningNotification,
	setInfoNotification,
} from 'state/slices/notification.slice'
import store from 'redux/store'

export const showSuccessNotification = (message: string) =>
	store.dispatch(setSuccessNotification(message))
export const showInfoNotification = (message: string) =>
	store.dispatch(setInfoNotification(message))
export const showWarningNotification = (message: string) =>
	store.dispatch(setWarningNotification(message))
export const showErrorNotification = (message: string) =>
	store.dispatch(setErrorNotification(message))
