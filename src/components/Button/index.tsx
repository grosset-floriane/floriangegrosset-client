import React, {ReactNode} from 'react'
import {Typography} from '@mui/material'
import {useStyles} from './Button.styles'

import ExternalIcon from 'icons/ExternalIcon'

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
