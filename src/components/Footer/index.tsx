import React from 'react'
import { Container, Typography, styled, Grid } from '@mui/material'
import { StyledLayout } from 'components/Layout/Layout.styles'
import HeaderTitle from 'components/HeaderTitle'
import Link from 'components/Link'
import useMediaQuery from 'hooks/useMediaQuery'
import { EMAIL } from 'utils/constants'

const StyledFooter = styled(Container)(({ theme }) => ({
    maxWidth: '100% !important',
    backgroundColor: theme.palette.primary.main,
    padding: 0,
    marginTop: 'auto',
    '& > div': {
        marginTop: '0 !important'
    }
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
                        <Link href={`mailto:${EMAIL}`} isExternal backgroundColor="primary">{EMAIL}</Link>
                    </Typography>
                </Grid>


            </StyledLayout>
        </StyledFooter >
    )
}

export default Footer