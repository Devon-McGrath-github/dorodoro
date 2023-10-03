'use client'

import React from 'react'
import { useInterval } from '@/hooks/useInterval'
import { useStore } from '@/store/Timer'
import ClockFormat from './ClockFormat'

export default function CountdownApp() {
	const [
		duration,
		taskCount,
		countingDown,
		toggleCountDown,
		decrease,
		reset,
		switchTimer,
	] = useStore((s) => [
		s.duration,
		s.taskCount,
		s.countingDown,
		s.toggleCountDown,
		s.decrease,
		s.reset,
		s.switchTimer,
	])

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
				switchTimer()
				reset()
			}
		},
		countingDown ? 1000 : null
		// passing null stops the interval
	)

	return (
		<div className='grid grid-cols-2 grid-rows-2 gap-3'>
			<div className='col-span-2'>
				<h1 className={`text-10xl text-center`}>
					<ClockFormat />
				</h1>
			</div>

			<button
				className='bg-skin-primary hover:bg-opacity-40 hover:border focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5'
				onClick={handleClick}
				type='button'
			>
				{countingDown ? 'Stop' : 'Start'}
			</button>

			<button
				className='bg-skin-primary hover:bg-opacity-40 hover:border focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5'
				onClick={handleReset}
				type='button'
			>
				Reset
			</button>
			<h2 className='text-center col-span-2'>{taskCount}</h2>
		</div>
	)
}
