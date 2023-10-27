import { create } from 'zustand'

// define types for state values and actions separately
interface State {
	duration: number
	timer: string
	countingDown: boolean
	color: string
	taskCount: number
}
interface Actions {
	updateTimer: (to: string) => void
	toggleCountDown: (boolean: boolean) => void
	decrease: (by: number) => void
	reset: () => void
	updateColor: (to: string) => void
	switchTimer: () => void
	resetTaskCount: () => void
}

// define the initial state
const initialState: State = {
	duration: 1500,
	timer: 'default',
	countingDown: false,
	color: '#f59e0b',
	taskCount: 1,
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
				set({ duration: (get().duration = 300) })
				break
			case 'longBreak':
				set({ duration: (get().duration = 1200) })
				break
			default:
				set({ duration: (get().duration = 1500) })
				break
		}
	},

	resetTaskCount: () => {
		set({ taskCount: (get().taskCount = 1) })
	},

	updateColor: (to: string) => {
		set({ color: (get().color = to) })
	},

	switchTimer: () => {
		if (get().timer !== 'default') {
			set({ timer: (get().timer = 'default') })
		} else {
			set({ taskCount: (get().taskCount = ++get().taskCount) })
			if (get().taskCount % 4 === 0) {
				set({ timer: (get().timer = 'longBreak') })
			} else {
				set({ timer: (get().timer = 'shortBreak') })
			}
		}
	},
}))
