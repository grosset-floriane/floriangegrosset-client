import React from 'react'
import {Typography} from '@mui/material'
import Layout from 'components/Layout'
import LayoutColumn from 'components/Layout/LayoutColumn'
import Link from 'components/Link'
import H1 from 'components/H1/H1'
import Button from 'components/Button'
import {Box} from '@mui/system'

const SOCIAL_MEDIA = [
	{
		label: 'LinkedIn Profile',
		link: 'https://www.linkedin.com/in/floriane-grosset-426435212/?locale=en_US',
	},
	{
		label: 'GitHub',
		link: 'https://github.com/grosset-floriane',
	},
]

const Contact = () => {
	return (
		<Layout>
			<LayoutColumn marginTop={0}>
				<H1 description="Floriane's contact information">Contact</H1>
				<Typography variant="bodyImpact" component="p">
					The easiest way to contact me is by email. Don’t hesitate to
					drop me a line to say hi!
					<br />
					<Link href="mailto:contact@florianegrosset.com">
						contact@florianegrosset.com
					</Link>
				</Typography>

				<Typography variant="h5" component="h3" mt={5}>
					On social networks
				</Typography>
				<Box
					mt={2}
					display="flex"
					gap={2}
					component="ul"
					ml={0}
					style={{padding: 0}}
				>
					{SOCIAL_MEDIA.map(({label, link}) => (
						<li key={label} style={{listStyle: 'none'}}>
							<Button
								href={link}
								isLink
								isExternal
							>
								{label}
							</Button>
						</li>
					))}
				</Box>
			</LayoutColumn>
		</Layout>
	)
}

export default Contact
