import React from 'react'
import { Typography, styled, Box, BoxProps } from '@mui/material'
import Logo from 'components/TopAppBar/Logo'

const StyledWrapper = styled(Box, {
    shouldForwardProp: (prop) => prop !== "isFooter"
})<BoxProps & { isFooter: boolean }>(({ theme, isFooter }) => ({
    display: isFooter ? 'flex' : 'block',
    alignItems: 'center'

}))

const StyledTypography = styled(Typography)(({ theme }) => ({

})) as typeof Typography

const HeaderTitle = ({ isOneLine = false }: { isOneLine?: boolean }) => {
    return (
        <StyledWrapper isFooter>
            <Logo width={isOneLine ? 20 : 40} />
            <Typography
                variant="h6"
                color="inherit"
                component="p"
                sx={{ ml: isOneLine ? 1 : 2, position: 'relative', top: isOneLine ? 0 : -2, textTransform: isOneLine ? 'uppercase' : 'initial', lineHeight: 1.1 }}
            >
                Florian(e) {!isOneLine && <><br /> — </>}Grosset
							</Typography>
        </StyledWrapper>
    )
}

export default HeaderTitle