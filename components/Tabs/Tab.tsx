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
		<li className='flex-auto text-center'>
			<a
				className={
					'text-xs cursor-pointer font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal bg-skin-primary border-none hover:bg-opacity-50 focus:ring-gray-200 ' +
					(timer === timerType ? 'bg-opacity-40' : 'bg-opacity-100')
				}
				onClick={(e) => {
					e.preventDefault()
					updateTimer(timerType)
					reset()
				}}
				data-toggle='tab'
				href='#'
				role='tablist'
			>
				{tabName}
			</a>
		</li>
	)
}

export default Tab
