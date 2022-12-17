import React from 'react'
import { Typography } from '@mui/material'
import Link from 'components/Link'
import Layout from 'components/Layout'
import LayoutColumn from 'components/Layout/LayoutColumn'
import H1 from 'components/H1/H1'

const About = () => {
	const tagline = "I’m Flo and I am a web dev, passionate about accessibility, sustainability, and art"
	
	return (
		<Layout>
			<LayoutColumn isSticky stickyTopPosition={70}>
				<H1 lang="fr" title="About" description={tagline}>Bonjour !</H1>
				<Typography variant="bodyImpact" component="p" mb={6}>
					{tagline}
		 	</Typography>
			</LayoutColumn>
			<LayoutColumn marginTop={40}>
				<Typography mb={3}>
					I am originally French, and now living in Hamburg, Germany.
		 	</Typography>

				<Typography mb={3}>
					I am the founder of{' '}
					<Link href="https://waawgallery.com" isExternal>
						WAAW, a non-profit online gallery
		 		</Link>
		 		. We aim to promote and help the creation of quality web-based
		 		artworks.
		 	</Typography>
				<Typography mb={3}>
					Since February 2022, I have been working as a frontend engineer
		 		at{' '}
					<Link href="https://getground.co.uk" isExternal>
						GetGround
		 		</Link>
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
