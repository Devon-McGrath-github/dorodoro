import Tabs from '@/components/Tabs/Tabs'
import Layout from '@/layouts'
import { useStore } from '@/store/Timer'
import Head from 'next/head'
import Alerts from '@/components/Timer/Alerts'
import { useEffect } from 'react'
import NavBar from '@/components/NavBar/NavBar'
import Sidebar from '@/components/Sidebar'

export default function Home() {
	const duration = useStore((state) => state.duration)

	const secondsToDisplay = duration % 60
	const minutesRemaining = (duration - secondsToDisplay) / 60
	const minutesToDisplay = minutesRemaining % 60
	const twoDigits = (num: number) => String(num).padStart(2, '0')

	const formattedTimer = `${twoDigits(minutesToDisplay)}:${twoDigits(
		secondsToDisplay
	)}`

	async function getNotificationPermissions() {
		// TODO: requestPermission a callback .then to handle response (add to state?)
		let response = await Notification.requestPermission()
		console.log('permission: ' + response)
		// TODO: make request every time user loads app if they have not granted permission
	}
	// on mount request permission for alerts.
	useEffect(() => {
		getNotificationPermissions()
	}, [])

	return (
		<Layout>
			<Head>
				{/* title cannot take react component so cannot reuse ClockFormat component */}
				<title>{formattedTimer}</title>
				<meta property='og:title' content='DoroDoro' />
			</Head>
			<NavBar />
			{/*  TODO: give sidebar props or a context that can be iterated through to
			populate the sidebar options. */}
			<Sidebar />
			<main
				className={`flex flex-col items-center justify-between p-24 font-sans`}
			>
				<Tabs />
			</main>
			<Alerts />
		</Layout>
	)
}
