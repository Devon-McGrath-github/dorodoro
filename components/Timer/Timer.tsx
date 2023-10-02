import React from 'react'
import { useInterval } from '@/hooks/useInterval'
import { useStore } from '@/store/Timer'
import ClockFormat from './ClockFormat'

export default function CountdownApp() {
	const [duration, countingDown, toggleCountDown, decrease, reset] = useStore(
		(state) => [
			state.duration,
			state.countingDown,
			state.toggleCountDown,
			state.decrease,
			state.reset,
		]
	)

	const handleClick = () => {
		toggleCountDown(!countingDown)
	}

	const handleReset = () => {
		reset()
	}

	useInterval(
		() => {
			if (duration > 0) {
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
				<h1 className={`text-6xl text-center`}>
					<ClockFormat />
				</h1>
			</div>

			<button
				className='text-skin-primary bg-skin-primary bg-opacity-30 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5'
				onClick={handleClick}
				type='button'
			>
				{countingDown ? 'Stop' : 'Start'}
			</button>

			<button
				className='text-skin-primary bg-skin-primary bg-opacity-30 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5'
				onClick={handleReset}
				type='button'
			>
				Reset
			</button>
		</div>
	)
}
