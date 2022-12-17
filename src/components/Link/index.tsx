import React from 'react'
import { Link as MuiLink } from '@mui/material'
import { makeStyles } from '@mui/styles'
import ExternalIcon from 'components/ExternalIcon';

type BackgroundColor = 'default' | 'primary'

const useStyles = makeStyles(theme => ({
    link: {
        fontWeight: 500,
        '&:hover, &:focus-visible, &:active': {
            outline: 'none',
            backgroundColor: ({ backgroundColor }: { backgroundColor: BackgroundColor }) => backgroundColor === 'primary' ? theme.palette.background.default : theme.palette.primary.main,
        }
    },
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
            {isExternal && <ExternalIcon />}
        </MuiLink>
    )
}

export default Link