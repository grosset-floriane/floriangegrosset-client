import {makeStyles} from '@mui/styles'

const useStyles = makeStyles(theme => ({
	homeLink: {
		display: 'flex',
		color: 'black',
	},
	AppBar: {
		backgroundColor: theme.palette.background.default,
	},
}))

export default useStyles
