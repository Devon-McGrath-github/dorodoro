import { useStore } from '@/store/Timer'
import React, { useCallback, useRef, useState } from 'react'
import { HexColorPicker, HexColorInput } from 'react-colorful'
import useClickOutside from '@/hooks/useClickOutside'

function ColorPicker() {
	const [color, updateColor] = useStore((s) => [s.color, s.updateColor])
	const [isOpen, setIsOpen] = useState(false)

	const popover = useRef<HTMLDivElement | null>(null)
	const close = useCallback(() => setIsOpen(false), [])
	useClickOutside(popover, close)

	return (
		<>
			<div
				id='color_picker'
				className='w-10 h-10 rounded-full border-2 border-solid border-white bg-skin-primary cursor-pointer'
				onClick={() => setIsOpen(true)}
			></div>

			{isOpen && (
				<div className='absolute' ref={popover}>
					<HexColorPicker
						className='cursor-pointer'
						color={color}
						onChange={updateColor}
					/>
				</div>
			)}

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
