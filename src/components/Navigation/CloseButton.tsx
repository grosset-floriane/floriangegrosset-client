import React from 'react'
import {ListItemButton, ListItem, ListItemIcon} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import {useDispatch} from 'react-redux'
import useStyles from './Navigation.styles'

function CloseButton() {
	const dispatch = useDispatch()
	const classes = useStyles()

	return (
		<ListItem disablePadding className={classes.listItem}>
			<ListItemButton
				onClick={() => dispatch({type: 'CLOSE_MENU'})}
				TouchRippleProps={{className: classes.buttonRipple}}
			>
				<ListItemIcon variant="centered">
					<CloseIcon color="action" />
				</ListItemIcon>
			</ListItemButton>
		</ListItem>
	)
}

export default CloseButton
