import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MuiLink from '@mui/material/Link'
import MenuButton from '../../features/menu/MenuButton'
import { Link as RouterLink } from 'react-router-dom'
import useStyles from './TopAppBar.styles'
import { useSelector } from 'react-redux'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Slide from '@mui/material/Slide'

import Logo from './Logo'

function HideOnScroll({ children, isOpen }) {
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={isOpen ? true : !trigger}>
      {children}
    </Slide>
  )
}

function TopAppBar() {
  const classes = useStyles()
  const { isOpen } = useSelector((state) => state.menu)

  const to = '/'
  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => {
        return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />
      }),
    [to],
  )

  return (
    <HideOnScroll isOpen={isOpen}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color={isOpen ? 'primary' : 'background'}>
          <Toolbar variant="dense" sx={{ pb: '7px' }}>
            <MuiLink
              color="inherit"
              component={renderLink}
              className={classes.homeLink}
            >
              <Logo />
              <Typography
                variant="h6"
                color="inherit"
                component="div"
                sx={{ ml: 2, position: 'relative', top: 0 }}
              >
                Flo's <br /> — Web Design
              </Typography>
            </MuiLink>

            <MenuButton />
          </Toolbar>
        </AppBar>
      </Box>
    </HideOnScroll>
  )
}

export default TopAppBar
