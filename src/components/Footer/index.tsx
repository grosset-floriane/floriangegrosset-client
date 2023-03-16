import React from 'react'
import {Container, Typography, Grid} from '@mui/material'
import {StyledLayout} from 'components/Layout/Layout.styles'
import HeaderTitle from 'components/HeaderTitle'
import Link from 'components/Link'
import {EMAIL} from 'utils/constants'
import {useStyles} from './Footer.styles'
import {navigationLinks} from 'components/Navigation/navigationLinks'

const Footer = () => {
	const classes = useStyles()

	return (
		<Container component="footer" className={classes.wrapper}>
			<StyledLayout container columnSpacing={4}>
				<Grid item xs={12} sm={8} lg={6} className={classes.gridItem}>
					<HeaderTitle isOneLine />
					<Typography variant="body2">
						I am web developer passionate about accessibility,
						sustainability and art.
						<br />
						<Link
							href={`mailto:${EMAIL}`}
							isExternal
							backgroundColor="primary"
						>
							{EMAIL}
						</Link>
					</Typography>
					<Typography component="h2" variant="h6" mt={3}>
						site map
					</Typography>
					<nav>
						<ul className={classes.siteMapList}>
							{navigationLinks.map(({to, label}) => (
								<li>
									<Link href={to} backgroundColor="primary">
										{label}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</Grid>
			</StyledLayout>
		</Container>
	)
}

export default Footer
