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
}

const Link = ({
	href,
	children,
	isExternal = false,
	backgroundColor = 'default',
	fontSize,
}: Props) => {
	const classes = useStyles({backgroundColor, fontSize})

	return (
		<MuiLink
			href={href}
			target={isExternal ? '_BLANK' : ''}
			className={classes.link}
		>
			{children}
			{isExternal && <ExternalIcon />}
		</MuiLink>
	)
}

export default Link
