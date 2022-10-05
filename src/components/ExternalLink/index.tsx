import React from 'react'
import { Link, styled } from '@mui/material'

// Replace colors by theme colors
const StyledLink = styled(Link, {})({
    color: "black",
    fontWeight: 500,
    '&:hover, &:focus-visible, &:active': {
        outline: 'none',
        backgroundColor: 'black',
        color: 'white'
    }
})

interface Props {
    href: string
    children: string
}

const ExternalLink = ({ href, children }: Props) => {

    return (
        <StyledLink href={href} target="_BLANK">
            {children}
            {/* Add external icon here */}
        </StyledLink>
    )
}

export default ExternalLink