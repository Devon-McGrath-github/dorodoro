import NavBar from '@/components/NavBar/NavBar'
import Tabs from '@/components/Tabs/Tabs'
import Layout from '@/layouts'
import { useStore } from '@/store/Timer'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	const timer = useStore((state) => state.timer)

	return (
		<Layout>
			<main className={`flex flex-col items-center justify-between p-24 ${inter.className}`}>
				<div>
					<Head>
						<title> {timer} </title>
						<meta property='og:title' content='My page title' key='title' />
					</Head>

					<Tabs />
				</div>
			</main>
		</Layout>
	)
}
