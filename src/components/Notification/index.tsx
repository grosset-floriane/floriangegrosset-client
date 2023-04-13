import React from 'react'
import {Snackbar, Alert} from '@mui/material'
import {useTypedSelector} from 'redux/typedSelector'
import {useDispatch} from 'react-redux'
import {closeNotification} from 'state/slices/notification.slice'
import {Info, Warning, CheckCircle} from '@mui/icons-material'

const Notification = () => {
	const {isOpen, severity, message} = useTypedSelector(
		state => state.notification,
	)
	const dispatch = useDispatch()

	const handleClose = () => {
		dispatch(closeNotification())
	}

	return (
		<Snackbar open={isOpen} autoHideDuration={600000} onClose={handleClose}>
			<Alert
				onClose={handleClose}
				severity={severity}
				icon={<Info sx={{fontSize: '1.4rem'}} />}
				iconMapping={{
					success: <CheckCircle sx={{fontSize: '1.4rem'}} />,
					info: <Info sx={{fontSize: '1.4rem'}} />,
					error: <Info sx={{fontSize: '1.4rem'}} />,
					warning: <Warning sx={{fontSize: '1.4rem'}} />,
				}}
				sx={{
					width: '100%',
					borderRadius: 30,
					border: '2px solid black',
					fontSize: '1rem',
					fontWeight: 600,
					alignItems: 'center',
					'& .MuiAlert-action': {
						paddingTop: 0,
						'& svg': {
							fontSize: '1.4rem',
						},
					},
				}}
				variant="filled"
			>
				{message}
			</Alert>
		</Snackbar>
	)
}

export default Notification
