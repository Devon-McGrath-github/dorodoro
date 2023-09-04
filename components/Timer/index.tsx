import React, { useState } from 'react'
import { useInterval } from '@/hooks/useInterval'
import { useStore } from '@/store/Timer'

export interface TimerProps {
	duration: number
}

export default function CountdownApp({ duration }: TimerProps) {
	const [timer, updatetimer, reset] = useStore((state) => [
		state.timer,
		state.decrease,
		state.reset,
	])
	const [countingDown, setCountingDown] = useState(false)

	const secondsToDisplay = timer % 60
	const minutesRemaining = (timer - secondsToDisplay) / 60
	const minutesToDisplay = minutesRemaining % 60

	const handleClick = () => {
		setCountingDown(!countingDown)
	}

	const handleReset = () => {
		setCountingDown(false)
		reset(duration)
	}

	useInterval(
		() => {
			if (timer > 0) {
				updatetimer(1)
			} else {
				setCountingDown(false)
			}
		},
		countingDown ? 1000 : null
		// passing null stops the interval
	)

	return (
		<div className='grid grid-cols-2 grid-rows-2 gap-3'>
			<div className='col-span-2'>
				<h1 className='text-6xl text-center'>
					{twoDigits(minutesToDisplay)}:{twoDigits(secondsToDisplay)}
				</h1>
			</div>

			<button
				className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
				onClick={handleClick}
				type='button'
			>
				{countingDown ? 'Stop' : 'Start'}
			</button>

			<button
				className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
				onClick={handleReset}
				type='button'
			>
				Reset
			</button>
		</div>
	)
}

const twoDigits = (num: number) => String(num).padStart(2, '0')
