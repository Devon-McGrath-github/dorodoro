import { create } from 'zustand'

// define types for state values and actions separately
interface State {
	time: number
	timer: string
	countingDown: boolean
}

interface Actions {
	updateTimer: (to: string) => void
	toggleCountDown: (boolean: boolean) => void
	decrease: (by: number) => void
	reset: () => void
}

// define the initial state
const initialState: State = {
	time: 1500,
	timer: 'default',
	countingDown: false,
}

// create store
export const useStore = create<State & Actions>()((set, get) => ({
	...initialState,

	updateTimer: (to: string) => {
		set({ timer: (get().timer = to) })
	},

	toggleCountDown: (boolean: boolean) => {
		set({ countingDown: (get().countingDown = boolean) })
	},

	decrease: (by: number) => {
		set({ time: get().time - by })
	},

	reset: () => {
		// stop countdown
		set({ countingDown: (get().countingDown = false) })
		// update timer duration
		switch (get().timer) {
			case 'shortBreak':
				set({ time: (get().time = 300) })
				break
			case 'longBreak':
				set({ time: (get().time = 900) })
				break
			default:
				set({ time: (get().time = 1500) })
				break
		}
	},
}))
