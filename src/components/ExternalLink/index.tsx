import React from 'react'
import { Link, styled } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


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
            <OpenInNewIcon aria-label="open in a new tab" sx={{ fontSize: 23, position: 'relative', top: 4, paddingLeft: '3px', display: 'inline-block' }} />
        </StyledLink>
    )
}

export default ExternalLink