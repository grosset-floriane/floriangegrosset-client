import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MuiLink from '@mui/material/Link'
import MenuButton from '../../features/menu/MenuButton'
import {
	Link as RouterLink,
	LinkProps as RouterLinkProps,
} from 'react-router-dom'
import useStyles from './TopAppBar.styles'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Slide from '@mui/material/Slide'
import {useTypedSelector} from 'redux/typedSelector'

import Logo from './Logo'

interface Props {
	/* eslint-disable  @typescript-eslint/no-explicit-any */
	children: React.ReactElement<any, any>
	isOpen: boolean
}

function HideOnScroll({children, isOpen}: Props) {
	const trigger = useScrollTrigger()

	return (
		<Slide appear={false} direction="down" in={isOpen ? true : !trigger}>
			{children}
		</Slide>
	)
}

function TopAppBar() {
	const classes = useStyles()
	const {isOpen} = useTypedSelector(state => state.menu)

	const to = '/'
	const renderLink = React.useMemo(
		() =>
			/* eslint-disable  @typescript-eslint/no-explicit-any */
			React.forwardRef<any, Omit<RouterLinkProps, 'to'>>(
				(itemProps, ref) => {
					return (
						<RouterLink
							to={to}
							ref={ref}
							{...itemProps}
							role={undefined}
						/>
					)
				},
			),
		[to],
	)

	return (
		<HideOnScroll isOpen={isOpen}>
			<Box sx={{flexGrow: 1}}>
				<AppBar
					position="fixed"
					color={isOpen ? 'primary' : 'background'}
				>
					<Toolbar variant="dense" sx={{pb: '7px'}}>
						<MuiLink
							color="inherit"
							component={renderLink}
							className={classes.homeLink}
						>
							<Logo />
							<Typography
								variant="h6"
								color="inherit"
								component="div"
								sx={{ml: 2, position: 'relative', top: 0}}
							>
								Florian(e) <br /> — Grosset
							</Typography>
						</MuiLink>

						<MenuButton />
					</Toolbar>
				</AppBar>
			</Box>
		</HideOnScroll>
	)
}

export default TopAppBar
