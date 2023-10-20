import Timer from '../Timer/Timer'
import Tab from './Tab'

const Tabs = () => {
	return (
		<div className='flex flex-wrap max-w-lg'>
			<ul
				className='flex w-full mb-0 list-none flex-wrap pt-3 pb-4 flex-row gap-2'
				role='tablist'
			>
				<Tab tabName={'Focus'} timerType={'default'} />
				<Tab tabName={'Short Break'} timerType={'shortBreak'} />
				<Tab tabName={'Long Break'} timerType={'longBreak'} />
			</ul>
			<div className='min-w-0 break-words w-full rounded'>
				<Timer />
			</div>
		</div>
	)
}

export default Tabs
