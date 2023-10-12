import { useStore } from '@/store/Timer'
import React, { useEffect } from 'react'

export default function Alerts() {
	const [duration, timer] = useStore((s) => [s.duration, s.timer])

	interface NotificationsLayout {
		default: string
		shortBreak: string
		longBreak: string
	}

	const notifications: NotificationsLayout = {
		default: 'Time for a Break',
		shortBreak: 'Time to Work',
		longBreak: 'Time to Work',
	}

	useEffect(() => {
		if (duration === 0) {
			new Notification('Times Up', {
				body: notifications[timer as keyof NotificationsLayout],
			})
		}
		return
	}, [duration])

	return <></>
}
