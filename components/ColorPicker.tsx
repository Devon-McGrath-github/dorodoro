import { useStore } from '@/store/Timer'
import React, { Fragment } from 'react'
import { HexColorPicker, HexColorInput } from 'react-colorful'
import { Popover, Transition } from '@headlessui/react'

function ColorPicker() {
	const [color, updateColor] = useStore((s) => [s.color, s.updateColor])

	return (
		<>
			<Popover className='relative'>
				{({ open }) => (
					<>
						<Popover.Button
							id='color_picker'
							className='w-10 h-10 rounded-full border-2 border-solid border-white bg-skin-primary cursor-pointer '
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
								<HexColorPicker
									className='cursor-pointer'
									color={color}
									onChange={updateColor}
								/>
							</Popover.Panel>
						</Transition>
					</>
				)}
			</Popover>
			{/* {isOpen && (
				<div className='absolute' ref={popover}>
					<HexColorPicker
						className='cursor-pointer'
						color={color}
						onChange={updateColor}
					/>
				</div>
			)} */}

			{/* <HexColorInput
				color={color}
				onChange={updateColor}
				className='align-center'
			/>
			 */}
		</>
	)
}

export default ColorPicker
