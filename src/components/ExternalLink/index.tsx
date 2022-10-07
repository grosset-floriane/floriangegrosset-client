import React from 'react'
import { Link, styled } from '@mui/material'


const StyledLink = styled(Link, {})(({ theme }) => ({
    color: theme.palette.text.primary,
    fontWeight: 500,
    '&:hover, &:focus-visible, &:active': {
        outline: 'none',
        backgroundColor: theme.palette.primary.main,
    }
}))

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