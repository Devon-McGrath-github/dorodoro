// custom hook from dan abramov - modified for typescript
// source: https://overreacted.io/making-setinterval-declarative-with-react-hooks/

import { useEffect, useRef } from 'react'

export function useInterval(callback: () => void, delay: number | null) {
	const savedCallback = useRef<(() => void) | null>(null)

	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback
	}, [callback])

	// Set up the interval.
	useEffect(() => {
		function tick() {
			if (savedCallback.current !== null) {
				savedCallback.current()
			}
		}

		if (delay !== null) {
			let id = setInterval(tick, delay)
			return () => clearInterval(id)
		}
	}, [delay])
}
