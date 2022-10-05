import React from 'react'
import { Typography, Link } from '@mui/material'
import ExternalLink from 'components/ExternalLink'

const About = () => {
	return (
		<>
			<Typography variant="h1" lang="fr">
				Bonjour !
			</Typography>
			<Typography variant="bodyImpact">
				I’m Flo and I am a web developer, passionate about
				accessibility, sustainability and, art
			</Typography>
			<Typography>
				I am originally French, but now living in Hamburg, Germany.
			</Typography>

			<Typography>
				I am the founder of{' '}
				<ExternalLink href="https://waawgallery.com">
					WAAW, a non-profit online gallery
				</ExternalLink>
				. We aim to promote and help the creation of quality web-based
				artworks.
			</Typography>
			<Typography>
				Since February 2022, I have been working as a frontend engineer
				at{' '}
				<ExternalLink href="https://getground.co.uk">
					GetGround
				</ExternalLink>
				.
			</Typography>
			<Typography>
				I love working with Javascript, React, Redux and Typescript,
				while caring for semantic HTML, accessibility, and good user
				experience.{' '}
			</Typography>
		</>
	)
}

export default About
