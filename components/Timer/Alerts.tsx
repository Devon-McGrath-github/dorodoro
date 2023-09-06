import { useStore } from '@/store/Timer'
import React, { useEffect } from 'react'

export default function Alerts() {
	const [duration] = useStore((s) => [s.duration])

	duration === 0 ? alert('triggered browser alert') : null

	return <></>
}
