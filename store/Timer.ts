import { create } from 'zustand'

// add logic for handling pomodoro technique tab/duration switching:
// using 'timer'
//   if 'timer' !== default
//      breaks always return to default
//   else
//      must have logic to go to short break every 3 times
//      long break every 4.
//      Possibly needs new state element to track '
//
// may be easiest to track 'tasks' and use math to determine active tab based on completed tasks.
// tasks only increments when 'default' timer duration reaches 0.

// define timer object with name and duration

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
	incrementTaskCount: () => void
}

// define the initial state
const initialState: State = {
	duration: 1500,
	timer: 'default',
	countingDown: false,
	color: '#121212',
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
				set({ duration: (get().duration = 3) })
				break
			case 'longBreak':
				set({ duration: (get().duration = 9) })
				break
			default:
				set({ duration: (get().duration = 15) })
				break
		}
	},

	updateColor: (to: string) => {
		set({ color: (get().color = to) })
	},

	incrementTaskCount: () => {
		set({ taskCount: (get().taskCount = ++get().taskCount) })
	},
}))
