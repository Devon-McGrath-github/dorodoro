import NavBar from '@/components/NavBar/NavBar'
import Tabs from '@/components/Tabs/Tabs'
import Layout from '@/layouts'
import { Inter } from 'next/font/google'
import { useStore } from '@/store/Timer'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	const time = useStore((state) => state.time)

	const secondsToDisplay = time % 60
	const minutesRemaining = (time - secondsToDisplay) / 60
	const minutesToDisplay = minutesRemaining % 60

	const twoDigits = (num: number) => String(num).padStart(2, '0')

	const formattedTimer = `${twoDigits(minutesToDisplay)}:${twoDigits(secondsToDisplay)}`

	return (
		<Layout>
			<Head>
				<title>{formattedTimer}</title>
				<meta property='og:title' content='DoroDoro' />
			</Head>

			<main className={`flex flex-col items-center justify-between p-24 ${inter.className}`}>
				<Tabs />
			</main>
		</Layout>
	)
}
