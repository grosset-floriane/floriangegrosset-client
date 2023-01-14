import React from 'react'
import Box from '@mui/material/Box'
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles(() =>
	createStyles({
		images: {
			width: '100%',
		},
	}),
)

const Logo = ({ width = 40 }: { width?: number }) => {
	const classes = useStyles()
	return (
		<Box sx={{ width }}>
			<img
				className={classes.images}
				alt="logo"
				src="./assets/logos/logo-black.png"
			/>
		</Box>
	)
}

export default Logo
