import React, { FC } from 'react'
import { styled, Grid, GridProps } from '@mui/material'

const StyledLayout = styled(Grid, {})<GridProps>(({ theme }) => ({
    padding: theme.spacing(2),
    marginTop: theme.spacing(9),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(5),
        maxWidth: 678,
    },
    [theme.breakpoints.up('lg')]: {
        margin: `${theme.spacing(9)} auto 0`,
        padding: theme.spacing(5),
        maxWidth: 1200,
    }

}))



const Layout: FC = ({ children }) => {

    return (
        <StyledLayout
            container
            spacing={4}
            // component does work on Grid components
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            component="main">
            {children}
        </StyledLayout>
    )
}

export default Layout