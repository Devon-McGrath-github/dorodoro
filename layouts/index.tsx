import React, { ReactNode } from 'react'
import { Inter, Roboto_Mono } from 'next/font/google'

interface LayoutProviderProps {
	children: ReactNode
}

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
})
const roboto_mono = Roboto_Mono({
	subsets: ['latin'],
	variable: '--font-roboto-mono',
})

const Layout = ({ children }: LayoutProviderProps) => {
	return (
		<div className={`min-h-screen ${roboto_mono.variable} ${inter.variable}`}>
			<div>{children}</div>
		</div>
	)
}

export default Layout
