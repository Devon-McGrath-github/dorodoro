import { create } from 'zustand'

// define types for state values and actions separately
interface State {
	duration: number
	timer: string
	countingDown: boolean
	color: string
}
interface Actions {
	updateTimer: (to: string) => void
	toggleCountDown: (boolean: boolean) => void
	decrease: (by: number) => void
	reset: () => void
}

// define the initial state
const initialState: State = {
	duration: 1500,
	timer: 'default',
	countingDown: false,
	color: '#00FF00',
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
		set({ duration: get().duration - by })
	},

	reset: () => {
		// stop countdown
		set({ countingDown: (get().countingDown = false) })
		// update timer duration
		switch (get().timer) {
			case 'shortBreak':
				set({ duration: (get().duration = 3) })
				break
			case 'longBreak':
				set({ duration: (get().duration = 900) })
				break
			default:
				set({ duration: (get().duration = 1500) })
				break
		}
	},
}))
