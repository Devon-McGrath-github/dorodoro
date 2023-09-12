import { useStore } from '@/store/Timer'
import React from 'react'
import { Roboto_Mono } from 'next/font/google'

const roboto_mono = Roboto_Mono({ subsets: ['latin'], variable: '--font-mono' })

const twoDigits = (num: number) => String(num).padStart(2, '0')

function ClockFormat() {
	const [duration] = useStore((s) => [s.duration])

	const secondsToDisplay = duration % 60
	const minutesRemaining = (duration - secondsToDisplay) / 60
	const minutesToDisplay = minutesRemaining % 60

	return (
		<h1 className='text-6xl text-center font-mono'>
			{twoDigits(minutesToDisplay)}:{twoDigits(secondsToDisplay)}
		</h1>
	)
}

export default ClockFormat
