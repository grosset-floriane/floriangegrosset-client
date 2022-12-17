import React from 'react'
import {Typography} from '@mui/material'
import Layout from 'components/Layout'
import LayoutColumn from 'components/Layout/LayoutColumn'
import Link from 'components/Link'
import H1 from 'components/H1/H1'

const Contact = () => {
	return (
		<Layout>
			<LayoutColumn marginTop={0}>
				<H1 description="Floriane's contact information">Contact</H1>
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
