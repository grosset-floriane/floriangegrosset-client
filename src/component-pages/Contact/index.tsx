import React from 'react'
import {Typography, useMediaQuery, useTheme} from '@mui/material'
import Layout from 'components/Layout'
import LayoutColumn from 'components/Layout/LayoutColumn'
import Link from 'components/Link'

const Contact = () => {
	const theme = useTheme()
	const isTablet = useMediaQuery(theme.breakpoints.up('sm'))

	return (
		<Layout>
			<LayoutColumn marginTop={0}>
				<Typography
					variant="h1"
					lang="fr"
					mt={2}
					mb={3}
					textAlign={isTablet ? 'left' : 'center'}
				>
					Contact
				</Typography>
				<Typography variant="bodyImpact">
					The easiest way to contact me is by email. Don’t hesitate to
					drop me a line to say hi!
					<br />
					<Link href="mailto:contact@florianegrosset.com">
						contact@florianegrosset.com
					</Link>
				</Typography>
			</LayoutColumn>
		</Layout>
	)
}

export default Contact
