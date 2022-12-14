import React, { FC } from 'react'
import Footer from 'components/Footer'
import { StyledLayout } from './Layout.styles'



const Layout: FC = ({ children }) => {

    return (
        <>
            <StyledLayout
                container
                spacing={4}
                component="main">
                {children}
            </StyledLayout>
            <Footer />
        </>
    )
}

export default Layout