import React from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { NavLink, LinkProps as RouterLinkProps } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material/'
import useStyles from './Navigation.styles'
import { useDispatch } from 'react-redux'
import { closeMenu } from 'state/slices/menu.slice'
import useMediaQuery from 'hooks/useMediaQuery'

interface Props {
	to: string
	text: string
}

function NavItem({ to, text }: Props) {
	const classes = useStyles()
	const dispatch = useDispatch()
	const { isDesktop } = useMediaQuery()

	const renderLink = React.useMemo(
		() =>
			/* eslint-disable  @typescript-eslint/no-explicit-any */
			React.forwardRef<any, Omit<RouterLinkProps, 'to'>>(
				(itemProps, ref) => {
					return (
						<NavLink
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
		<ListItem disablePadding className={classes.listItem}>
			<ListItemButton
				variant="centered"
				component={renderLink}
				onClick={() => dispatch(closeMenu())}
				className={classes.link}
				disableRipple
			>
				<ListItemText
					primary={<Typography variant={isDesktop ? "h6" : "h4"} component="span">{text}</Typography>}
				/>
			</ListItemButton>
		</ListItem>
	)
}

NavItem.propTypes = {
	text: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
}

export default NavItem
