import { useState } from 'react'
import ColorPicker from './ColorPicker'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Sidebar() {
	const [showSidebar, setShowSidebar] = useState(false)

	return (
		<>
			<div onClick={() => setShowSidebar(true)} tabIndex={0}>
				<Bars3Icon className='h-10 w-10 cursor-pointer' id='sidebar_open_btn' />
			</div>

			<div
				className={`font-sans flex drop-shadow-4xl top-0 right-0 w-full min-w-min max-w-md bg-white bg-opacity-100 text-white absolute  min-h-screen z-40  ease-in-out duration-300 
				${showSidebar ? 'translate-x-0 ' : 'translate-x-full'}
				`}
			>
				<div className='flex flex-col gap-4 p-5 bg-skin-primary bg-opacity-80 flex-1'>
					<div onClick={() => setShowSidebar(false)} className='ml-auto'>
						<XMarkIcon
							className='h-10 w-10 cursor-pointer'
							id='sidebar_close_btn'
						/>
					</div>

					<div className='flex flex-col gap-4 items-center px-3'>
						<div className='flex flex-row items-center justify-between gap-4 w-full'>
							<h1 className='text-2xl font-bold'>Settings:</h1>
						</div>
						<div className='flex flex-row items-center justify-between gap-4 w-full'>
							<h2 className='text-xl font-medium'>Color</h2>
							<ColorPicker />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
