import { useStore } from '@/store/Timer'
import React from 'react'

function ColorPicker() {
	const [color, updateColor] = useStore((s) => [s.color, s.updateColor])

	return (
		<>
			<input
				type='color'
				id='head'
				name='head'
				value={color}
				onChange={(e) => updateColor(e.target.value)}
			/>
		</>
	)
}

export default ColorPicker
