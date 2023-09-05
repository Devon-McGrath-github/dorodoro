import React from 'react'
import { useInterval } from '@/hooks/useInterval'
import { useStore } from '@/store/Timer'

export default function CountdownApp() {
	const [time, countingDown, toggleCountDown, decrease, reset] = useStore(
		(state) => [
			state.time,
			state.countingDown,
			state.toggleCountDown,
			state.decrease,
			state.reset,
		]
	)

	const secondsToDisplay = time % 60
	const minutesRemaining = (time - secondsToDisplay) / 60
	const minutesToDisplay = minutesRemaining % 60

	const twoDigits = (num: number) => String(num).padStart(2, '0')

	const handleClick = () => {
		toggleCountDown(!countingDown)
	}

	const handleReset = () => {
		reset()
	}

	useInterval(
		() => {
			if (time > 0) {
				decrease(1)
			} else {
				toggleCountDown(false)
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
