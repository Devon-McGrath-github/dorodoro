import { useState } from 'react'
import ColorPicker from './ColorPicker'

import React from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Sidebar() {
	const [showSidebar, setShowSidebar] = useState(false)

	return (
		<>
			<div onClick={() => setShowSidebar(!showSidebar)}>
				<Bars3Icon className='h-10 w-10' />
			</div>

			<div
				className={`font-sans bg-skin-primary flex flex-col gap-4 drop-shadow-4xl top-0 right-0 w-[35vw] p-5 text-white absolute  min-h-screen z-40  ease-in-out duration-300 ${
					showSidebar ? 'translate-x-0 ' : 'translate-x-full'
				}`}
			>
				<div
					onClick={() => setShowSidebar(!showSidebar)}
					className=' flex flex-row justify-end'
				>
					<XMarkIcon className='h-10 w-10' />
				</div>

				<div className='flex flex-col items-center '>
					<div className='flex flex-row items-center gap-4'>
						<h2 className='text-xl font-medium'>Colour: </h2>
						<ColorPicker />
					</div>
				</div>
			</div>
		</>
	)
}
