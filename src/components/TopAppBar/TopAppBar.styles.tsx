import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
	homeLink: {
		display: 'flex',
		color: 'black',
		'&:hover, &:focus-visible': {
			outline: 'none',
			backgroundColor: ({ isOpen }: { isOpen: boolean }) => isOpen ? theme.palette.background.default : theme.palette.primary.main,

		}
	},
	AppBar: {
		backgroundColor: theme.palette.background.default,
		zIndex: 999999,
	},
	toolbar: {
		paddingBottom: '7px',
		maxWidth: 1200 - 5 * 2 * 8,
		margin: '0 auto',
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			padding: `${theme.spacing(2, 5, 1)} !important`
		}
	},
	nav: {
		display: 'flex',
		marginLeft: 'auto'
	}
}))

export default useStyles
