import Timer from '../Timer/Timer'
import { useStore } from '@/store/Timer'
import Tab from './Tab'

const Tabs = () => {
	const [timer, updateTimer, reset] = useStore((s) => [
		s.timer,
		s.updateTimer,
		s.reset,
	])

	// Tabs should work based on timer

	//	if timer === default set active tab component to.....
	//
	//
	//
	//
	//

	return (
		<>
			<div className='flex flex-wrap'>
				<div className='w-full'>
					<ul
						className='flex w-full mb-0 list-none flex-wrap pt-3 pb-4 flex-row gap-2'
						role='tablist'
					>
						<Tab tabName={'Productive'} timerType={'default'} />
						<Tab tabName={'Short Break'} timerType={'shortBreak'} />
						<Tab tabName={'Long Break'} timerType={'longBreak'} />
					</ul>
					<div className='min-w-0 break-words w-full rounded'>
						<Timer />
					</div>
				</div>
			</div>
		</>
	)
}

export default Tabs
