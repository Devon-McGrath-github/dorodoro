import React, { ReactNode } from 'react'
import { Inter, Rubik_Mono_One, Azeret_Mono } from 'next/font/google'
import { getRGBColor, getAccessibleColor } from '../utils/index'
import { useStore } from '@/store/Timer'
import Head from 'next/head'

interface LayoutProviderProps {
	children: ReactNode
}

// Fonts:
const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
})
const font_mono = Azeret_Mono({
	weight: '600',
	style: 'normal',
	subsets: ['latin'],
	variable: '--font-mono',
})

const Layout = ({ children }: LayoutProviderProps) => {
	const [color] = useStore((s) => [s.color])

	const primaryColor = getRGBColor(color, 'primary')
	const a11yColor = getRGBColor(getAccessibleColor(color), 'a11y')

	return (
		<>
			<Head>
				<style>:root {`{${primaryColor} ${a11yColor}}`}</style>
			</Head>
			<div className={`min-h-screen ${font_mono.variable} ${inter.variable}`}>
				{children}
			</div>
		</>
	)
}

export default Layout
