import React from 'react';
import { generateImageSrc } from '../../utils/functions';
import { Typography } from '@mui/material';
import { ImageListItem } from '@mui/material';

function SingleProject({ data }) {
    if( data.length === 0 ) return;
    console.log(data.data);

    const { 
        title, 
        description, 
        images, 
        roles, 
        summary,
        slug
    } = data.data;

    let mainImage;
    if(images !== undefined && images.length !== 0) {
        mainImage = images.find(image => image.category === 'main');
        if (mainImage !== undefined)  mainImage = <img src={generateImageSrc(slug, mainImage, 'big')} />
  
    }

    return(
        <>
            <h1></h1>
            <Typography variant="h1" >
                {title}
            </Typography>

            <Typography variant="body1">
                {summary}
            </Typography>

            { mainImage }

            <Typography variant="h2" >
                Challenge
            </Typography>

            <Typography variant="body2" >
                { description }
            </Typography>

            <Typography variant="h2" >
                Approach
            </Typography>

            <Typography variant="body2" >
                { roles }
            </Typography>
        </>
    );
}

export default SingleProject;