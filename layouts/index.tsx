import React, { ReactNode } from 'react'
import NavBar from '@/components/NavBar/NavBar'

interface LayoutProviderProps {
	children: ReactNode
}

const Layout = ({ children }: LayoutProviderProps) => {
	return (
		<div className='min-h-screen'>
			<NavBar />

			<div>{children}</div>
		</div>
	)
}

export default Layout
