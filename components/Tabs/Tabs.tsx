import { useEffect, useState } from 'react'
import Timer from '../Timer/Timer'
import Tab from './Tab'

const Tabs = () => {
	const [isMobile, setIsMobile] = useState(false)

	//choose the screen size
	const handleResize = () => {
		if (window.innerWidth < 390) {
			setIsMobile(true)
		} else {
			setIsMobile(false)
		}
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize)
	}, [])

	return (
		<div className='flex flex-wrap max-w-lg'>
			<ul
				className='flex w-full mb-0 list-none flex-wrap pt-3 pb-4 flex-row gap-2'
				role='tablist'
			>
				<Tab tabName={'Focus'} timerType={'default'} key='focus' />

				{isMobile
					? [
							<Tab
								tabName={'Short'}
								timerType={'shortBreak'}
								key='shortBreak'
							/>,
							<Tab tabName={'Long'} timerType={'longBreak'} key='longBreak' />,
					  ]
					: [
							<Tab
								tabName={'Short Break'}
								timerType={'shortBreak'}
								key='shortBreak'
							/>,
							<Tab
								tabName={'Long Break'}
								timerType={'longBreak'}
								key='longBreak'
							/>,
					  ]}
			</ul>
			<div className='min-w-0 break-words w-full rounded'>
				<Timer />
			</div>
		</div>
	)
}

export default Tabs
