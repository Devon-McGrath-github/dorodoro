'use client'

import { useState } from 'react'
import ColorPicker from './ColorPicker'

import React from 'react'

export default function Sidebar() {
	const [showSidebar, setShowSidebar] = useState(false)

	return (
		<>
			{showSidebar ? (
				<button
					className='flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50'
					onClick={() => setShowSidebar(!showSidebar)}
				>
					x
				</button>
			) : (
				<svg
					onClick={() => setShowSidebar(!showSidebar)}
					className='fixed  z-30 flex items-center cursor-pointer right-10 top-6 fill-white'
					viewBox='0 0 100 80'
					width='40'
					height='40'
				>
					<rect width='100' height='10'></rect>
					<rect y='30' width='100' height='10'></rect>
					<rect y='60' width='100' height='10'></rect>
				</svg>
			)}

			<div
				className={`drop-shadow-4xl top-0 right-0 w-[35vw] bg-skin-primary  p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${
					showSidebar ? 'translate-x-0 ' : 'translate-x-full'
				}`}
			>
				<ColorPicker />
			</div>
		</>
	)
}
