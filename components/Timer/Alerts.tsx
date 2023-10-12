import { useStore } from '@/store/Timer'
import React, { useEffect } from 'react'

export default function Alerts() {
	const [duration, timer, updateTimer] = useStore((s) => [
		s.duration,
		s.timer,
		s.updateTimer,
	])

	const text = `Timer Finished`

	// add logic to change alert based on current timer
	// if not default
	//   alert must be sent
	//   timer must be updated to default
	//   tab must change to default
	// else
	//   must know if its 1st timer, second 3rd or forth to switch to shortbreak or long break
	//   likely have to update store to do this. New state element, rework tabs page

	// comment out
	useEffect(() => {
		if (duration === 0) {
			console.log('trigger')
			new Notification('Timer finished', { body: text })
		}
		return
	}, [duration])

	return <></>
}
