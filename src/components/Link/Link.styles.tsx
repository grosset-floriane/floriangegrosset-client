import { makeStyles } from '@mui/styles'
import { BackgroundColor } from 'types/Styles'


export const useStyles = makeStyles(theme => ({
    link: {
        fontWeight: 500,
        '&:hover, &:focus-visible, &:active': {
            outline: 'none',
            backgroundColor: ({ backgroundColor }: { backgroundColor: BackgroundColor }) => backgroundColor === 'primary' ? theme.palette.background.default : theme.palette.primary.main,
        }
    },
}))