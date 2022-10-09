import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
	container: {
		position: 'fixed',
		height: '100vh',
		width: '100vw',
		overflow: 'hidden',
		top: 0,
		left: 0,
		paddingTop: '72px',
		backgroundColor: theme.palette.primary.main,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		flexGrow: 1,
		zIndex: 99999,
	},
	nav: {
		overflowY: 'auto',
		paddingBottom: '72px',
	},
	listItem: {
		'@media (min-height: 350px)': {
			marginBottom: 8,
		},
	},
	link: {
		'&:hover, &:focus-visible': {
			backgroundColor: 'transparent !important',
			'& > div > span, & > div > svg': {
				backgroundColor: theme.palette.background.default,
				// color: 'black',
				[theme.breakpoints.up('lg')]: {
					backgroundColor: theme.palette.primary.main,
				}
			},
		}
	},
}))

export default useStyles
