import React from 'react'
import List from '@mui/material/List'
import NavItem from './NavItem'
import {Box} from '@mui/material'
import CloseButton from './CloseButton'

import useStyles from './Navigation.styles'

function Navigation() {
	const classes = useStyles()

	return (
		<Box className={classes.container}>
			<nav className={classes.nav}>
				<List>
					<NavItem to="/" text="About" />
					<NavItem to="/contact" text="Contact" />
					<CloseButton />
				</List>
			</nav>
		</Box>
	)
}

export default Navigation
