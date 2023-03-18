import React from 'react'
import {Box} from '@mui/material'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles(() => ({
	container: {
		marginTop: 2,
		display: 'flex',
		gap: 16,
		component: 'ul',
		marginLeft: 0,
		padding: 0,
		flexWrap: 'wrap',
	},
}))

const ActionsContainer: React.FC = ({children}) => {
	const classes = useStyles()
	return <Box className={classes.container}>{children}</Box>
}

export default ActionsContainer
