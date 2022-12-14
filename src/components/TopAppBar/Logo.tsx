import React from 'react';
import Box from '@mui/material/Box';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    images: {
      width: '100%',
    },
  }),
);

function Logo() {
    const classes = useStyles();
    return (
        <Box sx={{ width: 40 }}>
            <img 
                className={classes.images}
                alt="Floriane Grosset's logo"
                src="./assets/logos/logo-black.png"
            />
        </Box>
        
    );
}


export default Logo;