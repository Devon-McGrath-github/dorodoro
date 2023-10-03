import Tabs from '@/components/Tabs/Tabs'
import Layout from '@/layouts'
import { useStore } from '@/store/Timer'
import Head from 'next/head'
import Alerts from '@/components/Timer/Alerts'
import { useEffect } from 'react'
import NavBar from '@/components/NavBar/NavBar'
import ColorPicker from '@/components/ColorPicker'

export default function Home() {
	const duration = useStore((state) => state.duration)

	const secondsToDisplay = duration % 60
	const minutesRemaining = (duration - secondsToDisplay) / 60
	const minutesToDisplay = minutesRemaining % 60
	const twoDigits = (num: number) => String(num).padStart(2, '0')

	const formattedTimer = `${twoDigits(minutesToDisplay)}:${twoDigits(
		secondsToDisplay
	)}`

	// on mount request permission for alerts.
	useEffect(() => {
		// TODO: requestPermission a callback .then to handle response (add to state?)
		Notification.requestPermission()
	}, [])

	return (
		<Layout>
			<Head>
				{/* title cannot take react component so cannot reuse ClockFormat component */}
				<title>{formattedTimer}</title>
				<meta property='og:title' content='DoroDoro' />
			</Head>

			<NavBar />

			<main
				className={`flex flex-col items-center justify-between p-24 font-sans`}
			>
				<Tabs />
				<ColorPicker />
			</main>

			<Alerts />
		</Layout>
	)
}
