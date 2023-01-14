import {makeStyles} from '@mui/styles'

export const useStyles = makeStyles(theme => ({
	container: {
		display: 'block',
		width: 'fit-content',
		color: '#000000',
		backgroundColor: '#A6BBF5',
		padding: ({isExternal}: {isExternal: boolean}) =>
			isExternal ? theme.spacing(0.6, 2, 1) : theme.spacing(1, 2),
		borderRadius: 24,
		fontSize: 14,
		fontWeight: 600,
		textDecoration: 'none',
		'&:hover, &:focus-visible, &:active': {
			outline: '2px solid #000000d4',
		},
	},
	externalIcon: {
		fontSize: 18,
	},
}))