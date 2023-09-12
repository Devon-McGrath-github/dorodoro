import React, { ReactNode } from 'react'
import NavBar from '@/components/NavBar/NavBar'
import { Inter, Roboto_Mono } from 'next/font/google'

interface LayoutProviderProps {
	children: ReactNode
}

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
})
const roboto_mono = Roboto_Mono({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-roboto-mono',
})

const Layout = ({ children }: LayoutProviderProps) => {
	return (
		<div className={`min-h-screen ${roboto_mono.variable} ${inter.variable}`}>
			<NavBar />

			<div>{children}</div>
		</div>
	)
}

export default Layout
