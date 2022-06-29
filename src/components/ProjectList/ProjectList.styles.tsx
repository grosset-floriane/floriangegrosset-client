import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        overflowX: 'scroll',
    },
    item: {
        flexShrink: 0,
        padding: "0 !important",
        listStyle: 'none',
    }
}));

export default useStyles;