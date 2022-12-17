import React from 'react'
import {Helmet} from 'react-helmet'
import {Typography, useMediaQuery, useTheme} from '@mui/material'
import {useLocation} from 'react-router-dom'

const H1 = ({
	title,
	description,
	children,
	...props
}: {
	title?: string
	description: string
	children: string
	lang?: string
}) => {
	const theme = useTheme()
	const isTablet = useMediaQuery(theme.breakpoints.up('sm'))
	const {pathname} = useLocation()

	return (
		<>
			<Helmet>
				<title>{title || children} - Floriane Grosset</title>
				<meta name="title" content={title || children} />
				<meta name="description" content={description} />

				<meta property="og:title" content={title || children} />
				<meta property="og:description" content={description} />
				<meta
					property="og:url"
					content={`https://florianegrosset.com${pathname}`}
				/>
                
				  {/* Twitter meta tags */}
				<meta name="twitter:title" content={title || children} />
				<meta
					name="twitter:description"
					content={description}
				/>
			</Helmet>
			<Typography
				variant="h1"
				mb={3}
				mt={2}
				textAlign={isTablet ? 'left' : 'center'}
				{...props}
			>
				{children}
			</Typography>
		</>
	)
}

export default H1
