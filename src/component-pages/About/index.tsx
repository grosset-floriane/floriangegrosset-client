import React from 'react'
import { Typography, useMediaQuery, useTheme } from '@mui/material'
import ExternalLink from 'components/ExternalLink'
import Layout from 'components/Layout'
import LayoutColumn from 'components/Layout/LayoutColumn'

const About = () => {
	const theme = useTheme()
	const isTablet = useMediaQuery(theme.breakpoints.up('sm'))
	return (
		<Layout>
			<LayoutColumn isSticky stickyTopPosition={70}>
				<Typography variant="h1" lang="fr" mb={3} mt={2} textAlign={isTablet ? "left" : "center"}>
					Bonjour !
		 	</Typography>
				<Typography variant="bodyImpact" component="p" mb={6}>
					I’m Flo and I am a web dev, passionate about
					accessibility, sustainability, and art
		 	</Typography>
			</LayoutColumn>
			<LayoutColumn marginTop={40}>
				<Typography mb={3}>
					I am originally French, and now living in Hamburg, Germany.
		 	</Typography>

				<Typography mb={3}>
					I am the founder of{' '}
					<ExternalLink href="https://waawgallery.com">
						WAAW, a non-profit online gallery
		 		</ExternalLink>
		 		. We aim to promote and help the creation of quality web-based
		 		artworks.
		 	</Typography>
				<Typography mb={3}>
					Since February 2022, I have been working as a frontend engineer
		 		at{' '}
					<ExternalLink href="https://getground.co.uk">
						GetGround
		 		</ExternalLink>
		 		.
		 	</Typography>
				<Typography mb={3}>
					I love working with Javascript, React, Redux and Typescript,
					while caring for semantic HTML, accessibility, and good user
					experience.
		 	</Typography>
			</LayoutColumn>
		</Layout>
	)
}

export default About
