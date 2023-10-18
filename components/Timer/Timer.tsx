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
		resetTaskCount,
	] = useStore((s) => [
		s.duration,
		s.taskCount,
		s.countingDown,
		s.toggleCountDown,
		s.decrease,
		s.reset,
		s.switchTimer,
		s.resetTaskCount,
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
		<div className='grid grid-cols-2 auto-rows-auto gap-3'>
			<div className='col-span-2'>
				<h1 className={`text-center`}>
					<ClockFormat />
				</h1>
			</div>

			<button
				className='bg-skin-primary hover:bg-opacity-40 box-border border border-transparent hover:border hover:border-white focus:ring-gray-200 font-medium rounded-lg text-lg px-5 py-2.5'
				onClick={handleClick}
				type='button'
			>
				{countingDown ? 'Stop' : 'Start'}
			</button>

			<button
				className='bg-skin-primary hover:bg-opacity-40 box-border border border-transparent hover:border hover:border-white focus:ring-gray-200 font-medium rounded-lg text-lg px-5 py-2.5'
				onClick={handleReset}
				type='button'
			>
				Reset
			</button>
			<div className='text-center col-span-2'>
				<button onClick={resetTaskCount}>#{taskCount}</button>
			</div>
		</div>
	)
}
