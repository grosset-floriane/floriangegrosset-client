import React, {FC} from 'react'
import Footer from 'components/Footer'
import {StyledLayout} from './Layout.styles'
import {Box} from '@mui/system'
import Notification from 'components/Notification'

const Layout: FC = ({children}) => {
	return (
		<Box
			style={{
				display: 'flex',
				flexDirection: 'column',
				minHeight: '100vh',
			}}
		>
			<StyledLayout container spacing={4} component="main">
				{children}
			</StyledLayout>
			<Notification />
			<Footer />
		</Box>
	)
}

export default Layout
