import React from 'react'
import { Container, Typography, Grid } from '@mui/material'
import { StyledLayout } from 'components/Layout/Layout.styles'
import HeaderTitle from 'components/HeaderTitle'
import Link from 'components/Link'
import { EMAIL } from 'utils/constants'
import {useStyles} from './Footer.styles'

const Footer = () => {
    const classes = useStyles()

    return (
        <Container component="footer" className={classes.wrapper}>
            <StyledLayout container
                columnSpacing={4}>
                <Grid item xs={12} sm={8} lg={6} className={classes.gridItem}>
                    <HeaderTitle isOneLine />
                    <Typography variant="body2">I am web developer passionate about accessibility, sustainability and art.<br />
                        <Link href={`mailto:${EMAIL}`} isExternal backgroundColor="primary">{EMAIL}</Link>
                    </Typography>
                </Grid>
            </StyledLayout>
        </Container >
    )
}

export default Footer