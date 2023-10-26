import { useStore } from '@/store/Timer'
import React from 'react'

interface TabProps {
	tabName: string
	timerType: string
}

const Tab = ({ tabName, timerType }: TabProps) => {
	const [timer, updateTimer, reset] = useStore((s) => [
		s.timer,
		s.updateTimer,
		s.reset,
	])

	return (
		<li className='flex-1' role='tab' tabIndex={0}>
			<div
				className={
					'h-full align-middle text-center items-stretch text-xs cursor-pointer font-bold uppercase px-3 py-2 rounded bg-skin-primary box-border border border-transparent hover:border hover:border-white hover:bg-opacity-50 focus:ring-gray-200 ' +
					(timer === timerType ? 'bg-opacity-40' : 'bg-opacity-100')
				}
				onClick={(e) => {
					e.preventDefault()
					updateTimer(timerType)
					reset()
				}}
			>
				{tabName}
			</div>
		</li>
	)
}

export default Tab
