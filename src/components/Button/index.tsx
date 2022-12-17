import React, {ReactNode} from 'react'
import {Typography} from '@mui/material'
import {makeStyles} from '@mui/styles'

import ExternalIcon from 'components/ExternalIcon'

const useStyles = makeStyles(theme => ({
	container: {
		display: 'block',
		width: 'fit-content',
		color: '#000000',
		backgroundColor: '#A6BBF5',
		padding: ({isExternal}: {isExternal: boolean}) =>
			isExternal ? theme.spacing(0.6, 2, 1) : theme.spacing(1, 2),
		borderRadius: 24,
		fontSize: 14,
		fontWeight: 600,
		textDecoration: 'none',
		'&:hover, &:focus-visible, &:active': {
			outline: '2px solid #000000d4',
		},
	},
	externalIcon: {
		fontSize: 18,
	},
}))

interface Props {
	isLink?: boolean
	href?: string
	onClick?: () => void
	children: ReactNode
	isExternal?: boolean
}

const Button = ({
	isLink = false,
	href,
	onClick,
	children,
	isExternal = false,
}: Props) => {
	const classes = useStyles({isExternal})

	return (
		<Typography
			className={classes.container}
			component={isLink ? 'a' : 'button'}
			{...(isLink ? {href} : {onClick})}
			{...(isExternal && {target: '_BLANK'})}
		>
			{children}
			{isExternal && <ExternalIcon className={classes.externalIcon} />}
		</Typography>
	)
}

export default Button
