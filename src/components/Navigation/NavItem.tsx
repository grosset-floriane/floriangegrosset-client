import React from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material/'
import useStyles from './Navigation.styles'

interface Props {
  to: string
  text: string
}

function NavItem({ to, text }: Props) {
  const classes = useStyles()

  // function renderLink(to) {
  //   return renderLink = React.useMemo(
  //     () =>
  //       React.forwardRef((itemProps, ref) => {
  //         return <Link to={to} ref={ref} {...itemProps} role={undefined} />;
  //       }),
  //     [to],
  //   );
  // }
  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => {
        return <Link to={to} ref={ref} {...itemProps} role={undefined} />
      }),
    [to],
  )

  return (
    <ListItem disablePadding className={classes.listItem}>
      <ListItemButton
        variant="centered"
        component={renderLink}
        TouchRippleProps={{ className: classes.buttonRipple }}
      >
        <ListItemText primary={<Typography variant="h4">{text}</Typography>} />
      </ListItemButton>
    </ListItem>
  )
}

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default NavItem
