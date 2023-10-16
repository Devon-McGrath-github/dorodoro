import { useState } from 'react'
import ColorPicker from './ColorPicker'

import React from 'react'

export default function Sidebar() {
	const [showSidebar, setShowSidebar] = useState(false)

	return (
		<>
			<svg
				onClick={() => setShowSidebar(!showSidebar)}
				className='z-30 items-center cursor-pointer fill-white'
				viewBox='0 0 100 80'
				width='40'
				height='40'
			>
				<rect width='100' height='10'></rect>
				<rect y='30' width='100' height='10'></rect>
				<rect y='60' width='100' height='10'></rect>
			</svg>

			<div
				className={`bg-skin-primary flex flex-col drop-shadow-4xl top-0 right-0 w-[35vw] p-5 text-white absolute  min-h-screen z-40  ease-in-out duration-300 ${
					showSidebar ? 'translate-x-0 ' : 'translate-x-full'
				}`}
			>
				<div className='flex flex-row justify-end mb-4'>
					<button
						className=' text-4xl text-white cursor-pointer z-50'
						onClick={() => setShowSidebar(!showSidebar)}
					>
						x
					</button>
				</div>

				<div className='flex flex-row gap-4'>
					<h3>Colour: </h3>
					<ColorPicker />
				</div>
			</div>
		</>
	)
}
