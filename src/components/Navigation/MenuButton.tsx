import React from 'react'
import {useDispatch} from 'react-redux'
import MenuIcon from 'icons/MenuIcon'
import IconButton from '@mui/material/IconButton'
import {useTypedSelector} from 'redux/typedSelector'
import {toggleMenu} from 'state/slices/menu.slice'

const MenuButton = () => {
	const dispatch = useDispatch()
	const {isOpen} = useTypedSelector(state => state.menu)

	return (
		<>
			{!isOpen && (
				<IconButton
					edge="end"
					color="inherit"
					aria-label="menu"
					sx={{
						ml: 'auto',
						borderRadius: 0,
						'&:hover': {bgcolor: 'transparent'},
						'&:focus-visible': {
							bgcolor: 'primary.main',
							borderRadius: 0,
						},
						padding: '0 11px',
						position: 'relative',
						top: '-1px',
					}}
					onClick={() => dispatch(toggleMenu())}
					disableFocusRipple
				>
					<MenuIcon
						sx={{
							fontSize: 34,
							'&:hover': {bgcolor: 'primary.main'},
						}}
					/>
				</IconButton>
			)}
		</>
	)
}

export default MenuButton
