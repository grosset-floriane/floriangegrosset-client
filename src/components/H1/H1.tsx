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
				<meta property="og:title" content={title || children} />
				<meta property="og:description" content={description} />
				<meta
					property="og:url"
					content={`https://florianegrosset.com${pathname}`}
				/>
                <meta property="og:site_name" content="TFloriane Grosset" />
                <meta property="og:locale" content="en_UK" />
				<meta property="og:type" content="website" />
				<meta
					property="og:image"
					content="https://florianegrosset.com/assets/images/banner.jpg"
				/>
				<meta
					property="og:image:alt"
					content="React code poetry with a create function inside a Floriane Grosset component"
				/>

                {/* Twitter meta tags */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={title || children} />
				<meta
					name="twitter:description"
					content={description}
				/>
				<meta name="twitter:site" content="@FlosWebdesign" />
				<meta
					name="twitter:image"
					content="https://florianegrosset.com/assets/images/banner.jpg"
				/>
                <meta
					property="twitter:image:alt"
					content="React code poetry with a create function inside a Floriane Grosset component"
				/>
				<meta name="twitter:creator" content="@FlosWebdesign" />
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
