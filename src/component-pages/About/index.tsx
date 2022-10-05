import React from 'react'
import {Typography, Link} from '@mui/material'

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
				<Link href="https://waawgallery.com" target="_blank">
					WAAW, a non-profit online gallery
				</Link>
				. We aim to promote and help the creation of quality web-based
				artworks.
			</Typography>
			<Typography>
				Since February 2022, I have been working as a frontend engineer
				at{' '}
				<Link href="https://getground.co.uk" target="_blank">
					GetGround
				</Link>
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
