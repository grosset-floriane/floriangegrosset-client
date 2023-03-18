import {makeStyles} from '@mui/styles'
import {LIGTH_PALETTE} from 'themes/lightTheme'

export const useStyles = makeStyles(theme => ({
	container: {
		display: 'block',
		width: 'fit-content',
		color: LIGTH_PALETTE.black.dark,
		backgroundColor: theme.palette.primary.main,
		padding: ({isExternal}: {isExternal: boolean}) =>
			isExternal ? theme.spacing(0.6, 2, 1) : theme.spacing(1, 2),
		borderRadius: 24,
		fontSize: 14,
		fontWeight: 600,
		border: 'none',
		textDecoration: 'none',
		'&:hover, &:focus-visible, &:active': {
			outline: `2px solid ${theme.palette.action.active}`,
		},
	},
	externalIcon: {
		fontSize: 18,
	},
}))
