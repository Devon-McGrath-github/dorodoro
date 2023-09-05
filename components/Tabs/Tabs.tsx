import { useState } from 'react'
import Timer from '../Timer/Timer'
import { useStore } from '@/store/Timer'

const Tabs = () => {
	const [openTab, setOpenTab] = useState(1)

	const [timer, updateTimer, reset] = useStore((s) => [s.timer, s.updateTimer, s.reset])

	return (
		<>
			<div className='flex flex-wrap'>
				<div className='w-full'>
					<ul className='flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row' role='tablist'>
						<li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
							<a
								className={
									'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
									(openTab === 1 ? 'text-white bg-blueGray-600' : 'text-blueGray-600 bg-white')
								}
								onClick={(e) => {
									e.preventDefault()
									setOpenTab(1)
									updateTimer('default')
									reset()
								}}
								data-toggle='tab'
								href='#link1'
								role='tablist'
							>
								Productive
							</a>
						</li>
						<li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
							<a
								className={
									'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
									(openTab === 2 ? 'text-white bg-blueGray-600' : 'text-blueGray-600 bg-white')
								}
								onClick={(e) => {
									e.preventDefault()
									setOpenTab(2)
									updateTimer('shortBreak')
									reset()
								}}
								data-toggle='tab'
								href='#link2'
								role='tablist'
							>
								Short Break
							</a>
						</li>
					</ul>
					<div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded'>
						<div className='px-4 py-5 flex-auto'>
							<div className='tab-content tab-space'>
								<Timer />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Tabs
