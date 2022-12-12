import React from 'react'
import { Container, Typography, styled, Grid } from '@mui/material'
import { StyledLayout } from 'components/Layout/Layout.styles'
import HeaderTitle from 'components/HeaderTitle'
import Link from 'components/Link'
import useMediaQuery from 'hooks/useMediaQuery'

const StyledFooter = styled(Container)(({ theme }) => ({
    maxWidth: '100% !important',
    backgroundColor: theme.palette.primary.main,
    padding: '0'
})) as typeof Container

const Footer = () => {
    const { isMobile } = useMediaQuery()
    return (
        <StyledFooter component="footer">
            <StyledLayout container
                columnSpacing={4}>
                <Grid item xs={12} sm={8} lg={6} sx={{ pt: isMobile ? 5 : 0, pb: isMobile ? 5 : 0 }}>
                    <HeaderTitle isOneLine />
                    <Typography variant="body2">I am web developer passionate about accessibility, sustainability and art.<br />
                        <Link href="mailto:contact@florianegrosset.com" isExternal backgroundColor="primary">contact@florianegrosset.com</Link>
                    </Typography>
                </Grid>


            </StyledLayout>
        </StyledFooter >
    )
}

export default Footer