import React, { FC } from 'react'
import { Box, useMediaQuery, useTheme, Grid } from '@mui/material'

interface StickyElementProps {
    stickyTopPosition: number
    isDesktop: boolean
}

const StickyElement: FC<StickyElementProps> = ({ children, stickyTopPosition, isDesktop }) => {
    return (
        <Box sx={{ position: isDesktop ? 'sticky' : 'initial', top: stickyTopPosition, maxWidth: 450 }}>
            {children}
        </Box>
    )
}

interface LayoutColumnProps {
    stickyTopPosition?: number
    isSticky?: boolean
    marginTop?: number
}

const LayoutColumn: FC<LayoutColumnProps> = ({ children, stickyTopPosition = 45, isSticky = false, marginTop = 0 }) => {
    const theme = useTheme()
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))
    const columnContent = isSticky ? <StickyElement stickyTopPosition={stickyTopPosition} isDesktop={isDesktop}>{children}</StickyElement> : children

    return (
        <>
            <Grid xs={12} lg={isSticky ? 5 : 7} mt={isDesktop ? marginTop : 0}>
                {columnContent}
            </Grid>
        </>
    )
}

export default LayoutColumn