import React from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { makeStyles } from '@mui/styles'


const useStyles = makeStyles(() => ({
    externalIcon: {
        fontSize: 23,
        position: 'relative',
        top: 4,
        paddingLeft: '3px',
        display: 'inline-block'
    }
}))

const ExternalIcon = ({className}: {className?: string }) => {
    const classes = useStyles()
    return <OpenInNewIcon aria-label="open in a new tab" className={`${classes.externalIcon} ${className}`} />
}

export default ExternalIcon