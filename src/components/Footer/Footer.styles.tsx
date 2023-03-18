import {makeStyles} from '@mui/styles'

export const useStyles = makeStyles(theme => ({
	wrapper: {
		maxWidth: '100% !important',
		backgroundColor: theme.palette.primary.main,
		padding: 0,
		marginTop: 'auto',
		'& > div': {
			marginTop: '0 !important',
		},
	},
	gridItem: {
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(5, 0),
		},
	},
	siteMapList: {
		margin: 0,
		padding: 0,
		'& li': {
			listStyle: 'none',
			fontSize: '1.25rem',
		},
	},
}))
