import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MenuIcon from './MenuIcon'
import IconButton from '@mui/material/IconButton'

function MenuButton() {
  const dispatch = useDispatch()
  const { isOpen } = useSelector((state) => state.menu)

  return (
    <>
      {!isOpen && (
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ ml: 'auto' }}
          onClick={() => dispatch({ type: 'TOGGLE_MENU' })}
          style={{ padding: '0 11px', position: 'relative', top: '-1px' }}
        >
          <MenuIcon style={{ fontSize: 34 }} />
        </IconButton>
      )}
    </>
  )
}

export default MenuButton
