import { useStore } from '@/store/Timer'
import React from 'react'

const twoDigits = (num: number) => String(num).padStart(2, '0')

function ClockFormat() {
	const [duration] = useStore((s) => [s.duration])

	const secondsToDisplay = duration % 60
	const minutesRemaining = (duration - secondsToDisplay) / 60
	const minutesToDisplay = minutesRemaining % 60

	return (
		<div className='text-6xl text-center font-mono text-skin-primary'>
			{twoDigits(minutesToDisplay)}:{twoDigits(secondsToDisplay)}
		</div>
	)
}

export default ClockFormat
