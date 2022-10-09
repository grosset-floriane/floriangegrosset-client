import React from 'react'
import List from '@mui/material/List'
import NavItem from './NavItem'
import { Box } from '@mui/material'
import CloseButton from './CloseButton'
import { navigationLinks } from './navigationLinks'

import useStyles from './Navigation.styles'

function Navigation() {
	const classes = useStyles()

	return (
		<Box className={classes.container}>
			<nav className={classes.nav}>
				<List>
					{navigationLinks.map(({ to, label }) => (<NavItem to={to} text={label} />))}
					<CloseButton />
				</List>
			</nav>
		</Box>
	)
}

export default Navigation
