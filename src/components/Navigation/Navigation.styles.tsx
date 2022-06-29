import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
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
            flexGrow: 1
        },
        nav: {
            overflowY: 'auto',
            paddingBottom: '72px',
        },
        listItem: {
            '@media (min-height: 350px)': {
                marginBottom: 8,
            }
        },
        buttonRipple: { 
            color: "#fff" 
        }
}));

export default useStyles;