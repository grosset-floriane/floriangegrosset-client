import {makeStyles} from '@mui/styles'
import {BackgroundColor} from 'types/Styles'

interface stylesProps {
	fontSize?: string
	backgroundColor: BackgroundColor
}

export const useStyles = makeStyles(theme => ({
	link: {
		fontWeight: 500,
		fontSize: ({fontSize}: stylesProps) => fontSize || 'inherit',
		'&:hover, &:focus-visible, &:active': {
			outline: 'none',
			backgroundColor: ({backgroundColor}: stylesProps) =>
				backgroundColor === 'primary'
					? theme.palette.background.default
					: theme.palette.primary.main,
		},
	},
	active: {
		textDecoration: 'underline',
	},
}))
