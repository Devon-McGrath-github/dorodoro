import { useStore } from '@/store/Timer'
import React, { Fragment } from 'react'
import { HexColorPicker, HexColorInput } from 'react-colorful'
import { Popover, Transition } from '@headlessui/react'

function ColorPicker() {
	const [color, updateColor] = useStore((s) => [s.color, s.updateColor])

	const presetColors = [
		'#6231af',
		'#db2777',
		'#f59e0b',
		'#2dd4bf',
		'#06b6d4',
		'#10b981',
	]

	return (
		<>
			<Popover className='relative'>
				{({ open }) => (
					<>
						<Popover.Button
							id='color_picker'
							className='w-8 h-8 rounded-full border-2 border-solid border-white bg-skin-primary cursor-pointer '
						></Popover.Button>
						<Transition
							as={Fragment}
							enter='transition ease-out duration-200'
							enterFrom='opacity-0 translate-y-1'
							enterTo='opacity-100 translate-y-0'
							leave='transition ease-in duration-150'
							leaveFrom='opacity-100 translate-y-0'
							leaveTo='opacity-0 translate-y-1'
						>
							<Popover.Panel className='absolute left-1/2 z-10 mt-2 -translate-x-[90%] transform'>
								<div className='flex flex-col bg-white rounded-lg'>
									<HexColorPicker
										className='cursor-pointer'
										color={color}
										onChange={updateColor}
									/>
									<div className='flex justify-center gap-2 p-2'>
										{presetColors.map((presetColor) => (
											<button
												onClick={() => {
													updateColor(presetColor)
												}}
												className={'flex rounded-full cursor-pointer'}
												style={{
													backgroundColor: presetColor,
													width: '22px',
													height: '22px',
												}}
											/>
										))}
									</div>
								</div>
							</Popover.Panel>
						</Transition>
					</>
				)}
			</Popover>
		</>
	)
}

export default ColorPicker
