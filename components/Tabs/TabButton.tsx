import React from 'react'

function TabButton() {
	return (
		<li className='flex-auto text-center'>
			<a
				className={
					'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal bg-skin-primary bg-opacity-80 border-none hover:bg-opacity-50 focus:ring-gray-200' +
					(openTab === 1 ? 'bg-blueGray-600' : 'text-blueGray-600 ')
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
	)
}

export default TabButton
