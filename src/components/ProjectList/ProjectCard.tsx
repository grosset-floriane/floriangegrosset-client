import React from 'react'
import { Grid } from '@mui/material'
import { Card } from '@mui/material'
import { CardContent } from '@mui/material'
import { Typography } from '@mui/material'
import { CardMedia } from '@mui/material'
import { Link } from 'react-router-dom'
import { generateImageSrc } from '../../utils/functions'
import useStyles from './ProjectList.styles'

function ProjectCard({ image, id, title, summary, slug }) {
  const classes = useStyles()

  return (
    <Grid item className={classes.item} xs={10} sm={4} md={4} component="li">
      <Card
        data-testid={`projectcard-${id}`}
        to={`/projects/${slug}`}
        component={Link}
      >
        <CardContent>
          {image && (
            <CardMedia
              component="img"
              image={generateImageSrc(slug, image, 'big')}
              alt={image?.alt}
              loading="lazy"
            />
          )}
          <Typography variant="h5" component="h2">
            {title}
          </Typography>

          <Typography variant="h6" component="p">
            {summary}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default ProjectCard
