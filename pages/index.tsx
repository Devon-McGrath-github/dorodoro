import NavBar from '@/components/NavBar/NavBar'
import Tabs from '@/components/Tabs/Tabs'
import Layout from '@/layouts'
import { useStore } from '@/store/Timer'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	const time = useStore((state) => state.time)

	const secondsToDisplay = time % 60
	const minutesRemaining = (time - secondsToDisplay) / 60
	const minutesToDisplay = minutesRemaining % 60

	const twoDigits = (num: number) => String(num).padStart(2, '0')

	return (
		<Layout>
			<main className={`flex flex-col items-center justify-between p-24 ${inter.className}`}>
				<div>
					<Head>
						<title>
							{twoDigits(minutesToDisplay)}:{twoDigits(secondsToDisplay)}
						</title>
						<meta property='og:title' content='My page title' key='title' />
					</Head>

					<Tabs />
				</div>
			</main>
		</Layout>
	)
}
