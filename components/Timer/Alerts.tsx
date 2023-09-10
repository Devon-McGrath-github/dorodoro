import { useStore } from '@/store/Timer'
import React, { useEffect } from 'react'

export default function Alerts() {
	const [duration] = useStore((s) => [s.duration])

	const text = `Timer Finished.`

	useEffect(() => {
		console.log(duration)

		if (duration === 0) {
			debugger
			console.log('trigger')
			new Notification('To do list', { body: text })
		}
		return
	}, [duration])

	return <></>
}
