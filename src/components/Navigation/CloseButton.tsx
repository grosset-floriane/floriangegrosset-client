import React from 'react'
import { ListItemButton, ListItem, ListItemIcon } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useDispatch } from 'react-redux'
import useStyles from './Navigation.styles'
import { closeMenu } from 'state/slices/menu.slice'

const CloseButton = () => {
	const dispatch = useDispatch()
	const classes = useStyles({})

	return (
		<ListItem disablePadding className={classes.listItem}>
			<ListItemButton
				onClick={() => dispatch(closeMenu())}
				disableRipple
				className={classes.link}
				aria-label="close navigation"
				aria-expanded="true"
				aria-controls="menu"
			>
				<ListItemIcon variant="centered">
					<CloseIcon color="action" />
				</ListItemIcon>
			</ListItemButton>
		</ListItem>
	)
}

export default CloseButton
