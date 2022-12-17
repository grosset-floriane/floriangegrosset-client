import React, {FC} from 'react'
import Footer from 'components/Footer'
import {StyledLayout} from './Layout.styles'
import {Box} from '@mui/system'

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
			<Footer />
		</Box>
	)
}

export default Layout
