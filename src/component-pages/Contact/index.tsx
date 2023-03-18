import React from 'react'
import {Typography} from '@mui/material'
import Layout from 'components/Layout'
import LayoutColumn from 'components/Layout/LayoutColumn'
import Link from 'components/Link'
import H1 from 'components/H1/H1'
import Button from 'components/Button'
import useEmail from 'hooks/useEmail'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import ActionsContainer from 'components/ActionsContainer'
import {showSuccessNotification} from 'utils/showNotification'

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
	const {email, text} = useEmail()

	return (
		<Layout>
			<LayoutColumn marginTop={0}>
				<H1 description="Floriane's contact information">Contact</H1>
				<Typography variant="bodyImpact" mb={1}>
					The easiest way to contact me is by email. Don’t hesitate to
					drop me a line to say hi!
					<br />
					<Typography component="span">{text}</Typography>
				</Typography>
				<ActionsContainer>
					<CopyToClipboard
						text={email}
						onCopy={() => showSuccessNotification('Email copied!')}
					>
						<Button>copy email</Button>
					</CopyToClipboard>
					<Button href={`mailto:${email}`} isLink isExternal>
						open mail box
					</Button>
				</ActionsContainer>

				<Typography variant="h5" component="h3" mt={5}>
					On social networks
				</Typography>
				<ActionsContainer>
					{SOCIAL_MEDIA.map(({label, link}) => (
						<li key={label} style={{listStyle: 'none'}}>
							<Button href={link} isLink isExternal>
								{label}
							</Button>
						</li>
					))}
				</ActionsContainer>
			</LayoutColumn>
		</Layout>
	)
}

export default Contact
