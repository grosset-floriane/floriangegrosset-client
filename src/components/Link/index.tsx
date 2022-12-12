import React from 'react'
import { Link as MuiLink, styled } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { makeStyles } from '@mui/styles'

type BackgroundColor = 'default' | 'primary'

const useStyles = makeStyles(theme => ({
    link: {
        fontWeight: 500,
        '&:hover, &:focus-visible, &:active': {
            outline: 'none',
            backgroundColor: ({ backgroundColor }: { backgroundColor: BackgroundColor }) => backgroundColor === 'primary' ? theme.palette.background.default : theme.palette.primary.main,
        }
    },
    externalIcon: {
        fontSize: 23,
        position: 'relative',
        top: 4,
        paddingLeft: '3px',
        display: 'inline-block'
    }
}))


const StyledLink = styled(MuiLink, {})(({ theme }) => ({
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
    isExternal?: boolean
    backgroundColor?: BackgroundColor
}

const Link = ({ href, children, isExternal = false, backgroundColor = 'default' }: Props) => {
    const classes = useStyles({ backgroundColor })

    return (
        <MuiLink href={href} target={isExternal ? "_BLANK" : ""} className={classes.link}>
            {children}
            {isExternal && <OpenInNewIcon aria-label="open in a new tab" className={classes.externalIcon} />}
        </MuiLink>
    )
}

export default Link