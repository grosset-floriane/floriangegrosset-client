import React, {ReactNode} from 'react'
import {Link as MuiLink} from '@mui/material'
import ExternalIcon from 'icons/ExternalIcon'
import {BackgroundColor} from 'types/Styles'
import {useStyles} from './Link.styles'

interface Props {
	href: string
	children: ReactNode
	isExternal?: boolean
	backgroundColor?: BackgroundColor
	fontSize?: string
	isActive?: boolean
}

const Link = ({
	href,
	children,
	isExternal = false,
	backgroundColor = 'default',
	fontSize,
	isActive = false,
}: Props) => {
	const classes = useStyles({backgroundColor, fontSize})

	return (
		<MuiLink
			href={href}
			target={isExternal ? '_BLANK' : ''}
			className={`${classes.link} ${isActive && classes.active}`}
			aria-current={isActive ? 'page' : undefined}
		>
			{children}
			{isExternal && <ExternalIcon />}
		</MuiLink>
	)
}

export default Link
