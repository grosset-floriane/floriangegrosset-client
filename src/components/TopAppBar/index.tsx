import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import MuiLink from '@mui/material/Link'
import MenuButton from '../Navigation/MenuButton'
import {
	Link as RouterLink,
	LinkProps as RouterLinkProps,
} from 'react-router-dom'
import useStyles from './TopAppBar.styles'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Slide from '@mui/material/Slide'
import NavItem from 'components/Navigation/NavItem'
import { useTypedSelector } from 'redux/typedSelector'
import useMediaQuery from 'hooks/useMediaQuery'
import { navigationLinks } from 'components/Navigation/navigationLinks'
import HeaderTitle from 'components/HeaderTitle'
import { useLocation } from 'react-router-dom'

interface Props {
	/* eslint-disable  @typescript-eslint/no-explicit-any */
	children: React.ReactElement<any, any>
	isOpen: boolean
}

function HideOnScroll({ children, isOpen }: Props) {
	const trigger = useScrollTrigger()

	return (
		<Slide appear={false} direction="down" in={isOpen ? true : !trigger}>
			{children}
		</Slide>
	)
}

function TopAppBar() {
	const { isOpen } = useTypedSelector(state => state.menu)
	const classes = useStyles({ isOpen })
	const { isDesktop } = useMediaQuery()
	const { pathname } = useLocation()

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
			<Box sx={{ flexGrow: 1 }}>
				<AppBar
					position="fixed"
					color={isOpen ? 'primary' : 'background'}
					sx={{ zIndex: 999999 }}
				>
					<Toolbar variant="dense" className={classes.toolbar}>
						<MuiLink
							color="inherit"
							component={renderLink}
							className={classes.homeLink}
						>
							<HeaderTitle />
						</MuiLink>
						{isDesktop ? (<nav className={classes.nav}>
							{navigationLinks.map(({ to, label }) => (<NavItem to={to} text={label} isActive={to === pathname} />))}</nav>) : <MenuButton />}

					</Toolbar>
				</AppBar>
			</Box>
		</HideOnScroll>
	)
}

export default TopAppBar
