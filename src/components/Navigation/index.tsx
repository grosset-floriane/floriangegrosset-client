import React from 'react'
import List from '@mui/material/List'
import NavItem from './NavItem'
import { Box } from '@mui/material'
import CloseButton from './CloseButton'
import { navigationLinks } from './navigationLinks'
import { useLocation } from 'react-router'

import useStyles from './Navigation.styles'

function Navigation() {
	const classes = useStyles({})
	const {pathname} = useLocation()

	return (
		<Box className={classes.container}>
			<nav className={classes.nav}>
				<List>
					{navigationLinks.map(({ to, label }) => (<NavItem to={to} text={label} isActive={to === pathname} />))}
					<CloseButton />
				</List>
			</nav>
		</Box>
	)
}

export default Navigation
