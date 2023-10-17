import { useState } from 'react'
import ColorPicker from './ColorPicker'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Sidebar() {
	const [showSidebar, setShowSidebar] = useState(false)

	return (
		<>
			<div onClick={() => setShowSidebar(true)}>
				<Bars3Icon className='h-10 w-10' />
			</div>

			<div
				className={`font-sans flex  drop-shadow-4xl top-0 right-0 w-[30vw] text-white absolute  min-h-screen z-40  ease-in-out duration-300 
				${showSidebar ? 'translate-x-0 ' : 'translate-x-full'}
				`}
			>
				{/* background div to avoid animations delaying change of background color */}
				<div className='flex flex-col gap-4 p-5 bg-skin-primary flex-1'>
					<div
						onClick={() => setShowSidebar(false)}
						className=' flex flex-row justify-end'
					>
						<XMarkIcon className='h-10 w-10' />
					</div>

					<div className='flex flex-col items-center px-3'>
						<div className='flex flex-row items-center justify-between gap-4 w-full'>
							<h2 className='text-xl font-medium'>Colour</h2>
							<ColorPicker />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
